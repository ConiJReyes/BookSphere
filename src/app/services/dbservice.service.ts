import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertsService } from './alerts.service';
import { Usuarios } from '../modules/usuarios';
import { Libros } from '../modules/libros';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root'
})
export class DBserviceService {
  //variable database
  public database!:SQLiteObject

  //tablas e inserts
  tablasRoles : string = "CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY autoincrement, nombre_rol VARCHAR(100) NOT NULL);"

  tablasUsuario : string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, username VARCHAR(100) NOT NULL, correo_user VARCHAR(100) NOT NULL, password_user VARCHAR(100) NOT NULL, foto_perfil TEXT, id_rol INTEGER, FOREIGN KEY (id_rol) REFERENCES rol(id_rol));"

  tablaCategorias : string = "CREATE TABLE IF NOT EXISTS categoria (id_categoria INTEGER PRIMARY KEY autoincrement, nombre_categoria VARCHAR(100) NOT NULL);"

  tablaLibros : string = "CREATE TABLE IF NOT EXISTS libro(ISBN VARCHAR(20) PRIMARY KEY, titulo VARCHAR(255) NOT NULL,autor VARCHAR(100) NOT NULL, cantidad_paginas INTEGER NOT NULL, sinopsis TEXT NOT NULL, portada TEXT, id_categoria INTEGER, FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria) );";

  registrarRoles : string = "INSERT OR IGNORE INTO rol (id_rol, nombre_rol) VALUES (1, 'ADMINISTRADOR'),(2,'USUARIO_NORMAL');";

  registrarUsuario : string ="INSERT OR IGNORE INTO usuario(id_usuario, username, correo_user, password_user, foto_perfil, id_rol) VALUES(1,'ADMIN','ADMIN1@BOOKSPHERE.CL','admin123.',NULL,1);"

  registroCategoria : string ="INSERT OR IGNORE INTO categoria(nombre_categoria) VALUES('Ficción'),('No Ficción'),('Juveniles'),('Académicos'),('Especializados'),('Comedia'),('Terror');";


  registroLibro : string ="INSERT OR IGNORE INTO libro(ISBN, titulo, autor, cantidad_paginas, sinopsis, portada, id_categoria) VALUES ('978-0451524935', '1984', 'George Orwell', 328, 'Una novela distópica', NULL,1), ('978-0743273565', 'El gran Gatsby', 'F. Scott Fitzgerald', 224, 'Historia de amor y tragedia', NULL,2), ('978-1503290563', 'Orgullo y prejuicio', 'Jane Austen', 416, 'Relaciones y conflictos sociales', NULL,2), ('978-0547928227', 'El Hobbit', 'J.R.R. Tolkien', 310, 'Aventura en la Tierra Media', NULL,1), ('978-0439708180', 'Harry Potter y la piedra filosofal', 'J.K. Rowling', 320, 'El inicio de la saga', NULL,1), ('978-0439064873', 'Harry Potter y la cámara secreta', 'J.K. Rowling', 341, 'La continuación de la saga', NULL,1), ('978-0439136365', 'Harry Potter y el prisionero de Azkaban', 'J.K. Rowling', 435, 'La tercera parte de la saga', NULL,1), ('978-0439139607', 'Harry Potter y el cáliz de fuego', 'J.K. Rowling', 636, 'El torneo de los Tres Magos', NULL,1), ('978-0439358071', 'Harry Potter y la Orden del Fénix', 'J.K. Rowling', 766, 'La batalla contra Voldemort', NULL,1), ('978-0439785969', 'Harry Potter y el misterio del príncipe', 'J.K. Rowling', 607, 'Secretos del pasado', NULL,1), ('978-0545139700', 'Harry Potter y las reliquias de la Muerte', 'J.K. Rowling', 759, 'El final épico de la saga', NULL,1), ('978-0553593716', 'Canción de hielo y fuego: Juego de tronos', 'George R.R. Martin', 835, 'Intriga y poder en los Siete Reinos', NULL,1), ('978-1538764379', 'Romper el círculo', 'Colleen Hoover', 384, 'Novela de crecimiento personal', NULL,2), ('978-0804172707', 'Tan Poca Vida', 'Hanya Yanagihara', 720, 'Historia de amor y pérdida', NULL,2), ('978-0349436999', 'Alas de sangre', 'Rebecca Yarros', 384, 'Fantasía y aventuras épicas', NULL,1), ('978-8466654413', 'Libro Troll', 'ElRubiusOMG', 240, 'Libro interactivo con desafíos', NULL,6), ('978-1285741550', 'Cálculo: Trascendentes tempranas', 'James Stewart', 1368, 'Libro de matemáticas avanzado', NULL,4), ('978-6071508590', 'Fundamentos de Física', 'David Halliday, Robert Resnick', 1328, 'Conceptos básicos de física', NULL,4), ('978-0262033848', 'Introducción a los Algoritmos', 'Thomas H. Cormen', 1312, 'Estructuras de datos y algoritmos', NULL,4), ('978-0073511290', 'Economía', 'Paul A. Samuelson, William D. Nordhaus', 720, 'Introducción a la economía', NULL,4), ('978-0321356680', 'Estructuras de Datos y Algoritmos en Java', 'Robert Lafore', 800, 'Programación en Java', NULL,5), ('978-0136042594', 'Inteligencia Artificial: Un Enfoque Moderno', 'Stuart Russell, Peter Norvig', 1152, 'Libro sobre IA avanzada', NULL,5), ('978-0470528335', 'Diseño y Análisis de Experimentos', 'Douglas C. Montgomery', 752, 'Estadística y diseño experimental', NULL,5), ('978-0132126953', 'Redes de Computadoras', 'Andrew S. Tanenbaum', 960, 'Teoría y práctica de redes', NULL,5);"

  listadoUsuarios = new BehaviorSubject([]);
  listadoLibros = new BehaviorSubject([]);

  private isBDready : BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private sqlite: SQLite, private platform : Platform, private alerta : AlertsService, private toast : ToastsService) { 
    this.crearBD();
  }

  fetchUsuario(): Observable<Usuarios[]>{
    return this.listadoUsuarios.asObservable();
  }

  fetchLibros(): Observable<Libros[]>{
    return this.listadoLibros.asObservable();
  }

  dbEstado(){
    return this.isBDready.asObservable();
  }

  crearBD(){
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name: 'Booksphere2.db',
        location:'default'
      }).then((db: SQLiteObject)=>{
        this.database = db;
        this.crearTablas();
        this.isBDready.next(true);
      }).catch(error=>{
        this.alerta.GenerarAlerta("En creacion de BD", "Error creando la Bd" + JSON.stringify(error));
      })
    })
  }


  async crearTablas(){
    try{
      await this.database.executeSql(this.tablasRoles,[])

      await this.database.executeSql(this.registrarRoles,[])

      await this.database.executeSql(this.tablasUsuario,[])

      await this.database.executeSql(this.registrarUsuario,[])

      await this.database.executeSql(this.tablaCategorias, [])

      await this.database.executeSql(this.registroCategoria, [])

      await this.database.executeSql(this.tablaLibros, [])

      
    
      const libroExisten = await this.database.executeSql('SELECT COUNT(*) AS total FROM libro',[])

      if(libroExisten.rows.item(0).total === 0){

        await this.database.executeSql(this.registroLibro, [])

      }else{
        console.log('Libros ya existen no se crearan denuevo');
        //un mensaje para la nada!
      }

    }catch(e){
      this.alerta.GenerarAlerta("En creacion de tabla","Error creando las tablas" + JSON.stringify(e));
    }
  }

  seleccionarLibros(){
   return this.database.executeSql('SELECT libro.ISBN, libro.titulo, libro.autor, libro.cantidad_paginas, libro.sinopsis, libro.portada, categoria.nombre_categoria, libro.id_categoria FROM libro INNER JOIN categoria ON libro.id_categoria = categoria.id_categoria ',[]).then(res=>{
    let items: Libros[]=[];
    if(res.rows.length > 0){
      for(var i = 0; i < res.rows.length; i++){
        items.push({
          ISBN: res.rows.item(i).ISBN,
          titulo: res.rows.item(i).titulo,
          autor: res.rows.item(i).autor,
          cantidad_paginas: res.rows.item(i).cantidad_paginas,
          sinopsis: res.rows.item(i).sinopsis,
          portada: res.rows.item(i).portada,
          nombre_categoria: res.rows.item(i).nombre_categoria,
          id_categoria: res.rows.item(i).id_categoria,
        })
      }
    }
   
    this.listadoLibros.next(items as any);
   })
  }

  insertarLibros(isbn: string, titulo:string,autor:string,categoria:number,paginas:number, sinopsis:string,portada:string){
    return this.database.executeSql('INSERT INTO libro(ISBN, titulo, autor, cantidad_paginas, sinopsis, portada, id_categoria) VALUES(?,?,?,?,?,?,?)',[isbn,titulo,autor,paginas,sinopsis,portada,categoria]).then(res=>{
      this.toast.GenerarToast('Libro ingreado con exito',3000,'bottom')
      this.seleccionarLibros();
    })

  }
  eliminarLibros(isbn:string){
    return this.database.executeSql('DELETE FROM libro WHERE ISBN = ?',[isbn]).then(res=>{
      this.toast.GenerarToast('Libro Eliminado con EXITO',3000,'bottom')
      this.seleccionarLibros();
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','Error con eliminar Libros'+JSON.stringify(e))
    })
  }

  editarLibros(isbn:string,titulo:string,autor:string,categoria:number,paginas:number,sinopsis:string, portada:string){
    return this.database.executeSql('UPDATE libro SET titulo = ?,autor = ?, cantidad_paginas = ? , sinopsis = ? , portada = ? , id_categoria = ? WHERE ISBN = ?',[titulo,autor,paginas,sinopsis,portada,categoria,isbn]).then(res=>{
      this.toast.GenerarToast('Libro modificado con exito',3000,'bottom')
      this.seleccionarLibros();
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Hubo un error al editar el libro' + JSON.stringify(e))
    })
  }


  insertarUsuario(username :string, correo: string, password :string){
    return this.database.executeSql('INSERT INTO usuario(username, correo_user, password_user, foto_perfil, id_rol) VALUES(?,?,?,NULL,2)',[username,correo,password])
      
  }

  inicioSesionUsuario(usuario:string, password:string){
    return this.database.executeSql('SELECT * FROM usuario WHERE username = ? AND password_user = ?;',[usuario,password]).then(res=>{
      let usuario = null;
      if(res.rows.length >0){
        usuario = {
          id_usuario: res.rows.item(0).id_usuario,
          username: res.rows.item(0).username,
          correo_user: res.rows.item(0).correo_user,
          password_user: res.rows.item(0).password_user,
          id_rol: res.rows.item(0).id_rol
        };
      }
      return usuario;
    }).catch(e => {
      this.alerta.GenerarAlerta("En consulta de usuario", "Error consultando los datos: " + JSON.stringify(e));
      return null;
    });
  }

  verificarCorreoUsuario(usuario: string, correo: string){
    return this.database.executeSql('SELECT * FROM usuario WHERE username = ? OR correo_user = ? ',[usuario,correo]).then(res=>{
      return res.rows.length > 0; 
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error', 'Error al verificar usuario o correo: ' + JSON.stringify(e));
      return false;
    })
  }

  seleccionarUsuarios(){
    return this.database.executeSql('SELECT * FROM usuario',[]).then(res=>{
      let items : Usuarios[]=[];
      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          items.push({
            id_usuario : res.rows.item(i).id_usuario,
            username : res.rows.item(i).username,
            correo_user : res.rows.item(i).correo_user ,
            id_rol :res.rows.item(i).id_rol 
          })
        }
      }
      this.listadoUsuarios.next(items as any)
    }).catch(e=>{
      this.alerta.GenerarAlerta("En consulta de tabla", "Error consultando las tablas de Usuarios: " + JSON.stringify(e));
    })
  }

  actualizarUsuarios(id_usuario :string, nombre: string, email: string){
    return this.database.executeSql('UPDATE usuario SET username = ?, correo_user = ? WHERE id_usuario = ?',[nombre,email,id_usuario]).then(res=>{
      this.toast.GenerarToast('El Usuario a sido modificado',3000,'bottom')
      this.seleccionarUsuarios();
    }).catch(e=>{
      this.alerta.GenerarAlerta('Modificar','Error: ' + JSON.stringify(e));
    })
  }

  eliminarUsuario(id: string){
    return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?',[id]).then(res=>{
      this.toast.GenerarToast('Usuario Eliminado Correctamente',3000,'bottom')
      this.seleccionarUsuarios();
    }).catch(e=>{
      this.alerta.GenerarAlerta('Eliminar','Error: ' + JSON.stringify(e));
    })
  }


  existenDatos(){
    this.database.executeSql('SELECT COUNT(*) as total FROM libro',[]).then(res=>{
      this.alerta.GenerarAlerta('Aviso','Total de libros en la base de datos es de:'+res.rows.item(0).total)
    })
  }
  
  eliminarBD() {
    this.sqlite.deleteDatabase({
      name: 'Booksphere.db',
      location: 'default'
    }).then(() => {
      this.toast.GenerarToast('Base de datos eliminada correctamente', 2000, 'bottom');
      this.crearBD();  // Volver a crear la BD después de eliminarla
    }).catch(error => {
      this.alerta.GenerarAlerta("Error", "Error eliminando la base de datos: " + JSON.stringify(error));
    });
  }
  

}
