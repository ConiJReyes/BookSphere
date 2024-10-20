import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertsService } from './alerts.service';
import { Usuarios } from '../modules/usuarios';
import { Libros } from '../modules/libros';
import { ToastsService } from './toasts.service';
import { LibrosGuardados } from '../modules/libros-guardados';
import { Resenas } from '../modules/resenas';
import { Estrenos } from '../modules/estrenos';
import { LibrosPopularesEstrenos } from '../modules/libros-populares-estrenos';
import { LibrosPopulares } from '../modules/libros-populares';
import { Recomendaciones } from '../modules/recomendaciones';


@Injectable({
  providedIn: 'root'
})
export class DBserviceService {
  //variable database
  public database!: SQLiteObject

  //tablas e inserts
  tablasRoles: string = "CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY autoincrement, nombre_rol VARCHAR(100) NOT NULL);"

  tablasUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, username VARCHAR(100) NOT NULL, correo_user VARCHAR(100) NOT NULL, password_user VARCHAR(100) NOT NULL, foto_perfil TEXT, id_rol INTEGER, FOREIGN KEY (id_rol) REFERENCES rol(id_rol));"

  tablaCategorias: string = "CREATE TABLE IF NOT EXISTS categoria (id_categoria INTEGER PRIMARY KEY autoincrement, nombre_categoria VARCHAR(100) NOT NULL);"

  tablaLibros: string = "CREATE TABLE IF NOT EXISTS libro(ISBN VARCHAR(20) PRIMARY KEY, titulo VARCHAR(255) NOT NULL,autor VARCHAR(100) NOT NULL, cantidad_paginas INTEGER NOT NULL, sinopsis TEXT, portada TEXT, id_categoria INTEGER, FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria) );";

  tablaGuardados: string = "CREATE TABLE IF NOT EXISTS guardados(id_guardados INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, ISBN VARCHAR(20) NOT NULL, es_favorito BOOLEAN DEFAULT 0, estado_lectura VARCHAR(20) DEFAULT 'por leer', pagina_actual INTEGER DEFAULT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario), FOREIGN KEY(ISBN) REFERENCES libro(ISBN));"

  ///reseñas id_reseña pk autocrementando, texto de la reseña text not null, isbn fk, id usuario fk, estado(baneado o no), fecha ban, fecha elavoracion reseña
  tablasResenas: string = "CREATE TABLE IF NOT EXISTS resena (id_resena INTEGER PRIMARY KEY AUTOINCREMENT,texto_resena TEXT NOT NULL,ISBN VARCHAR(20) NOT NULL,id_usuario INTEGER NOT NULL, estadoBan BOOLEAN DEFAULT 0 ,fecha_ban DATETIME,fecha_elaboracion_resena DATETIME DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY (ISBN) REFERENCES libro(ISBN),FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario))"

  tablaRecomendaciones: string = "CREATE TABLE IF NOT EXISTS recomendacion(id_recomendacion INTEGER PRIMARY KEY AUTOINCREMENT, titulo_recomendacion VARCHAR(200) NOT NULL, texto_recomendacion TEXT, id_usuario INTEGER, FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario));"

  tablaEstrenos: string = "CREATE TABLE IF NOT EXISTS estrenos(id_estreno INTEGER PRIMARY KEY AUTOINCREMENT,titulo VARCHAR(100) NOT NULL, autor VARCHAR(100) NOT NULL, fecha_estreno DATETIME NOT NULL, portada TEXT);"

  registrarRoles: string = "INSERT OR IGNORE INTO rol (id_rol, nombre_rol) VALUES (1, 'ADMINISTRADOR'),(2,'USUARIO_NORMAL');";

  registrarUsuario: string = "INSERT OR IGNORE INTO usuario(id_usuario, username, correo_user, password_user, foto_perfil, id_rol) VALUES(1,'ADMIN','ADMIN1@BOOKSPHERE.CL','admin123.',NULL,1);"

  registroCategoria: string = "INSERT OR IGNORE INTO categoria(nombre_categoria) VALUES('Ficción'),('No Ficción'),('Juveniles'),('Académicos'),('Especializados'),('Comedia'),('Terror');";

  registroEstreno: string = "INSERT OR IGNORE INTO estrenos (titulo, autor, fecha_estreno, portada) VALUES ('La isla de la mujer dormida', 'Arturo Pérez-Reverte', '2025-01-20', NULL),  ('Quedará el amor', 'Alice Kellen', '2024-12-24', NULL), ('Mesa para dos', 'Amor Towles', '2024-09-05', NULL), ('El mejor libro del mundo', 'Manuel Vilas', '2024-10-18', NULL);"

  registroLibro: string = "INSERT OR IGNORE INTO libro(ISBN, titulo, autor, cantidad_paginas, sinopsis, portada, id_categoria) VALUES ('978-0451524935', '1984', 'George Orwell', 328, 'Una novela distópica', NULL,1), ('978-0743273565', 'El gran Gatsby', 'F. Scott Fitzgerald', 224, 'Historia de amor y tragedia', NULL,2), ('978-1503290563', 'Orgullo y prejuicio', 'Jane Austen', 416, 'Relaciones y conflictos sociales', NULL,2), ('978-0547928227', 'El Hobbit', 'J.R.R. Tolkien', 310, 'Aventura en la Tierra Media', NULL,1), ('978-0439708180', 'Harry Potter y la piedra filosofal', 'J.K. Rowling', 320, 'El inicio de la saga', NULL,1), ('978-0439064873', 'Harry Potter y la cámara secreta', 'J.K. Rowling', 341, 'La continuación de la saga', NULL,1), ('978-0439136365', 'Harry Potter y el prisionero de Azkaban', 'J.K. Rowling', 435, 'La tercera parte de la saga', NULL,1), ('978-0439139607', 'Harry Potter y el cáliz de fuego', 'J.K. Rowling', 636, 'El torneo de los Tres Magos', NULL,1), ('978-0439358071', 'Harry Potter y la Orden del Fénix', 'J.K. Rowling', 766, 'La batalla contra Voldemort', NULL,1), ('978-0439785969', 'Harry Potter y el misterio del príncipe', 'J.K. Rowling', 607, 'Secretos del pasado', NULL,1), ('978-0545139700', 'Harry Potter y las reliquias de la Muerte', 'J.K. Rowling', 759, 'El final épico de la saga', NULL,1), ('978-0553593716', 'Canción de hielo y fuego: Juego de tronos', 'George R.R. Martin', 835, 'Intriga y poder en los Siete Reinos', NULL,1), ('978-1538764379', 'Romper el círculo', 'Colleen Hoover', 384, 'Novela de crecimiento personal', NULL,2), ('978-0804172707', 'Tan Poca Vida', 'Hanya Yanagihara', 720, 'Historia de amor y pérdida', NULL,2), ('978-0349436999', 'Alas de sangre', 'Rebecca Yarros', 384, 'Fantasía y aventuras épicas', NULL,1), ('978-8466654413', 'Libro Troll', 'ElRubiusOMG', 240, 'Libro interactivo con desafíos', NULL,6), ('978-1285741550', 'Cálculo: Trascendentes tempranas', 'James Stewart', 1368, 'Libro de matemáticas avanzado', NULL,4), ('978-6071508590', 'Fundamentos de Física', 'David Halliday, Robert Resnick', 1328, 'Conceptos básicos de física', NULL,4), ('978-0262033848', 'Introducción a los Algoritmos', 'Thomas H. Cormen', 1312, 'Estructuras de datos y algoritmos', NULL,4), ('978-0073511290', 'Economía', 'Paul A. Samuelson, William D. Nordhaus', 720, 'Introducción a la economía', NULL,4), ('978-0321356680', 'Estructuras de Datos y Algoritmos en Java', 'Robert Lafore', 800, 'Programación en Java', NULL,5), ('978-0136042594', 'Inteligencia Artificial: Un Enfoque Moderno', 'Stuart Russell, Peter Norvig', 1152, 'Libro sobre IA avanzada', NULL,5), ('978-0470528335', 'Diseño y Análisis de Experimentos', 'Douglas C. Montgomery', 752, 'Estadística y diseño experimental', NULL,5), ('978-0132126953', 'Redes de Computadoras', 'Andrew S. Tanenbaum', 960, 'Teoría y práctica de redes', NULL,5);"

  listadoUsuarios = new BehaviorSubject([]);

  listadoLibros = new BehaviorSubject([]);

  usuarioPerfil = new BehaviorSubject([]);

  libroGuardadoPerfil = new BehaviorSubject<LibrosGuardados[]>([]);

  listadoResenas = new BehaviorSubject([]);

  listadoEstrenos = new BehaviorSubject([]);

  librosPopulares3= new BehaviorSubject([]);

  librosEstrenos3= new BehaviorSubject([]);

  listadoRecomendaciones = new BehaviorSubject([]);

  private isBDready: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private sqlite: SQLite, private platform: Platform, private alerta: AlertsService, private toast: ToastsService) {
    this.crearBD();
  }

  fetchLibrosPopulares(): Observable<LibrosPopulares[]>{
    return this.librosPopulares3.asObservable();
  }

  fetchLibrosEstrenos(): Observable<LibrosPopularesEstrenos[]>{
    return this.librosEstrenos3.asObservable();
  }

  fetchUsuario(): Observable<Usuarios[]> {
    return this.listadoUsuarios.asObservable();
  }

  fetchLibros(): Observable<Libros[]> {
    return this.listadoLibros.asObservable();
  }

  fetchResenas(): Observable<Resenas[]>{
    return this.listadoResenas.asObservable();
  }

  fetchUsuarioPerfil() {
    return this.usuarioPerfil.asObservable();
  }

  fetchLibroGuardadoPerfil(): Observable<LibrosGuardados[]> {
    return this.libroGuardadoPerfil.asObservable();
  }

  fetchEstrenos(): Observable<Estrenos[]>{
    return this.listadoEstrenos.asObservable();
  }

  fetchRecomendacion():  Observable<Recomendaciones[]>{
    return this.listadoRecomendaciones.asObservable();
  }


  dbEstado() {
    return this.isBDready.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'Booksphere12.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();

        this.isBDready.next(true);
      }).catch(error => {
        this.alerta.GenerarAlerta("En creacion de BD", "Error creando la Bd" + JSON.stringify(error));
      })
    })
  }


  async crearTablas() {
    try {
      await this.database.executeSql(this.tablasRoles, [])

      await this.database.executeSql(this.registrarRoles, [])

      await this.database.executeSql(this.tablasUsuario, [])

      await this.database.executeSql(this.registrarUsuario, [])

      await this.database.executeSql(this.tablaCategorias, [])

      await this.database.executeSql(this.registroCategoria, [])

      await this.database.executeSql(this.tablaLibros, [])

      await this.database.executeSql(this.tablaGuardados, [])

      await this.database.executeSql(this.tablasResenas,[])

      await this.database.executeSql(this.tablaRecomendaciones,[])

      await this.database.executeSql(this.tablaEstrenos,[])



      const libroExisten = await this.database.executeSql('SELECT COUNT(*) AS total FROM libro', [])
      const estrenosExisten = await this.database.executeSql('SELECT COUNT(*) AS total FROM estrenos',[])

      if (libroExisten.rows.item(0).total === 0) {

        await this.database.executeSql(this.registroLibro, [])

      } else {
        console.log('Libros ya existen no se crearan denuevo');
        //un mensaje para la nada!
      }
      
      if(estrenosExisten.rows.item(0).total ===0){
        await this.database.executeSql(this.registroEstreno,[])
      }else{
        console.log('Estrenos ya existen no se crearan denuevo');
        //un mensaje para la nada!
      }

    } catch (e) {
      this.alerta.GenerarAlerta("En creacion de tabla", "Error creando las tablas" + JSON.stringify(e));
    }
  }

  //CRUD LIBROS

  async seleccionarLibros() {
    try {
      const res = await this.database.executeSql(
        'SELECT libro.ISBN, libro.titulo, libro.autor, libro.cantidad_paginas, libro.sinopsis, libro.portada, categoria.nombre_categoria, libro.id_categoria FROM libro INNER JOIN categoria ON libro.id_categoria = categoria.id_categoria',
        []
      );

      let items: Libros[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            ISBN: res.rows.item(i).ISBN,
            titulo: res.rows.item(i).titulo,
            autor: res.rows.item(i).autor,
            cantidad_paginas: res.rows.item(i).cantidad_paginas,
            sinopsis: res.rows.item(i).sinopsis,
            portada: res.rows.item(i).portada,
            nombre_categoria: res.rows.item(i).nombre_categoria,
            id_categoria: res.rows.item(i).id_categoria,
          });
        }
      }

      this.listadoLibros.next(items as any);
    } catch (error) {
      console.error('Error seleccionando los libros:', error);
      this.alerta.GenerarAlerta('Error', 'Error al seleccionar libros: ' + JSON.stringify(error));
    }
  }
  insertarLibros(isbn: string, titulo: string, autor: string, categoria: number, paginas: number, sinopsis: string, portada: string) {
    return this.database.executeSql('INSERT INTO libro(ISBN, titulo, autor, cantidad_paginas, sinopsis, portada, id_categoria) VALUES(?,?,?,?,?,?,?)', [isbn, titulo, autor, paginas, sinopsis, portada, categoria]).then(res => {
      this.toast.GenerarToast('Libro ingreado con exito', 3000, 'bottom')
      this.seleccionarLibros();
    }).catch(e => {
      this.alerta.GenerarAlerta('Error', 'Error con insertar Libros' + JSON.stringify(e))
    })

  }
  eliminarLibros(isbn: string) {
    return this.database.executeSql('DELETE FROM libro WHERE ISBN = ?', [isbn]).then(res => {
      this.toast.GenerarToast('Libro Eliminado con EXITO', 3000, 'bottom')
      this.seleccionarLibros();
    }).catch(e => {
      this.alerta.GenerarAlerta('Error', 'Error con eliminar Libros' + JSON.stringify(e))
    })
  }
  editarLibros(isbn: string, titulo: string, autor: string, categoria: number, paginas: number, sinopsis: string, portada: string) {
    return this.database.executeSql('UPDATE libro SET titulo = ?,autor = ?, cantidad_paginas = ? , sinopsis = ? , portada = ? , id_categoria = ? WHERE ISBN = ?', [titulo, autor, paginas, sinopsis, portada, categoria, isbn]).then(res => {
      this.toast.GenerarToast('Libro modificado con exito', 3000, 'bottom')
      this.seleccionarLibros();
    }).catch(e => {
      this.alerta.GenerarAlerta('ERROR', 'Hubo un error al editar el libro' + JSON.stringify(e))
    })
  }



  //FUNCIONES INICIO DE SESION Y REGISTRO
  //
  //
  //
  //
  //


  insertarUsuario(username: string, correo: string, password: string) {
    return this.database.executeSql('INSERT INTO usuario(username, correo_user, password_user, foto_perfil, id_rol) VALUES(?,?,?,NULL,2)', [username, correo, password])

  }
  inicioSesionUsuario(usuario: string, password: string) {
    return this.database.executeSql('SELECT * FROM usuario WHERE username = ? AND password_user = ?;', [usuario, password]).then(res => {
      let usuario = null;
      if (res.rows.length > 0) {
        usuario = {
          id_usuario: res.rows.item(0).id_usuario,
          username: res.rows.item(0).username,
          correo_user: res.rows.item(0).correo_user,
          id_rol: res.rows.item(0).id_rol
        };
      }
      return usuario;
    }).catch(e => {
      this.alerta.GenerarAlerta("En consulta de usuario", "Error consultando los datos: " + JSON.stringify(e));
      return null;
    });
  }
  verificarCorreoUsuario(usuario: string, correo: string) {
    return this.database.executeSql('SELECT * FROM usuario WHERE username = ? OR correo_user = ? ', [usuario, correo]).then(res => {
      return res.rows.length > 0;
    }).catch(e => {
      this.alerta.GenerarAlerta('Error', 'Error al verificar usuario o correo: ' + JSON.stringify(e));
      return false;
    })
  }



  //CRUD DE USUARIOS
  //
  //
  //
  //
  //

  seleccionarUsuarios() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuarios[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            username: res.rows.item(i).username,
            correo_user: res.rows.item(i).correo_user,
            id_rol: res.rows.item(i).id_rol
          })
        }
      }
      this.listadoUsuarios.next(items as any)
    }).catch(e => {
      this.alerta.GenerarAlerta("En consulta de tabla", "Error consultando las tablas de Usuarios: " + JSON.stringify(e));
    })
  }
  actualizarUsuarios(id_usuario: string, nombre: string, email: string) {
    return this.database.executeSql('UPDATE usuario SET username = ?, correo_user = ? WHERE id_usuario = ?', [nombre, email, id_usuario]).then(res => {
      this.toast.GenerarToast('El Usuario a sido modificado', 3000, 'bottom')
      this.seleccionarUsuarios();
    }).catch(e => {
      this.alerta.GenerarAlerta('Modificar', 'Error: ' + JSON.stringify(e));
    })
  }
  eliminarUsuario(id: string) {
    return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?', [id]).then(res => {
      this.toast.GenerarToast('Usuario Eliminado Correctamente', 3000, 'bottom')
      this.seleccionarUsuarios();
    }).catch(e => {
      this.alerta.GenerarAlerta('Eliminar', 'Error: ' + JSON.stringify(e));
    })
  }



  //Funciones de GuardarLibros y perfil de usuario
  //
  //
  //
  //
  //

  guardarLibrosPerfil(id_usuario: number, isbn: string) {
    return this.database.executeSql('INSERT OR IGNORE INTO guardados(id_usuario, ISBN) VALUES(?,?)', [id_usuario, isbn]).then(() => {
    }).catch(e => {
      this.alerta.GenerarAlerta('ERROR', 'Problema con añadir a favoritos' + JSON.stringify(e))
    })
  }
  traerUsuarioLogueado(idusuario: number) {
    return this.database.executeSql('SELECT username, correo_user, foto_perfil FROM usuario WHERE id_usuario = ?;', [idusuario]).then(res => {
      if (res.rows.length > 0) {
        const usuario = {
          username: res.rows.item(0).username,
          correo_user: res.rows.item(0).correo_user,
          foto_perfil: res.rows.item(0).foto_perfil
        };
        this.usuarioPerfil.next(usuario as any);  // Emitir los cambios
      }
      return null

    }).catch(e => {
      this.alerta.GenerarAlerta('ERROR', 'Problema buscando al usuario' + JSON.stringify(e))
      return null
    })
  }
  traerUsuarioModificar(idusuario: number) {
    return this.database.executeSql('SELECT username, correo_user, foto_perfil FROM usuario WHERE id_usuario = ?;', [idusuario]).then(res => {
      if (res.rows.length > 0) {
        return {
          username: res.rows.item(0).username,
          correo_user: res.rows.item(0).correo_user,
          foto_perfil: res.rows.item(0).foto_perfil,
          password_user: res.rows.item(0).password_user
        };
      } else {
        return null
        //no se encontro el usuario
      }
    }).catch(e => {
      this.alerta.GenerarAlerta('ERROR', 'Problema buscando al usuario' + JSON.stringify(e))
      return null
    })
  }
  modificarUsuario(usuario: string, correo: string, contrasena: string, foto_perfil: string, idusuario: number) {
    return this.database.executeSql('UPDATE usuario SET username = ?, correo_user = ?, password_user = ?, foto_perfil = ? WHERE id_usuario = ?', [usuario, correo, contrasena, foto_perfil, idusuario]).then(() => {
      this.toast.GenerarToast('Usuario Modificado con exito', 3000, 'bottom')
    }).catch(e => {
      this.alerta.GenerarAlerta('Error', 'Hubo una problema al modificar el usuario' + JSON.stringify(e))
    })
  }


  async traerLibrosGuardados(idUsuario: number) {
    return this.database.executeSql(
      `SELECT libro.ISBN, libro.titulo, libro.autor, libro.cantidad_paginas, libro.sinopsis, libro.portada, 
      categoria.nombre_categoria, guardados.es_favorito, guardados.estado_lectura, guardados.pagina_actual 
      FROM libro 
      INNER JOIN guardados ON libro.ISBN = guardados.ISBN 
      INNER JOIN categoria ON libro.id_categoria = categoria.id_categoria 
      WHERE guardados.id_usuario = ?`, [idUsuario]).then(res => {
        let items: LibrosGuardados[] = []
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              ISBN: res.rows.item(i).ISBN,
              titulo: res.rows.item(i).titulo || 'Sin título',
              autor: res.rows.item(i).autor || 'Autor desconocido',
              cantidad_paginas: res.rows.item(i).cantidad_paginas || 0,
              sinopsis: res.rows.item(i).sinopsis || 'Sin sinopsis',
              portada: res.rows.item(i).portada || 'ruta-a-imagen-default',
              nombre_categoria: res.rows.item(i).nombre_categoria || 'Sin categoría',
              es_favorito: res.rows.item(i).es_favorito,
              estado_lectura: res.rows.item(i).estado_lectura || 'Por leer',
              pagina_actual: res.rows.item(i).pagina_actual || 0,
            })
          }
        }
        this.libroGuardadoPerfil.next(items as any)
      }).catch(e => {
        console.error("Error obteniendo libros guardados:", e);
        return [];
      });
  }
  //ESTE ES EL QUE VE SI EL LIBRO YA HA SIDO GUARDADO, (TSDETALLES LIBRO)
  async verificarLibroGuardado(idUsuario: number, isbn: string): Promise<boolean> {
    return this.database.executeSql(
      `SELECT COUNT(*) AS count 
       FROM guardados 
       WHERE id_usuario = ? AND ISBN = ?`,
      [idUsuario, isbn]
    ).then(res => {
      return res.rows.item(0).count > 0;
    }).catch(e => {
      console.error("Error verificando si el libro está guardado:", e);
      return false;
    });
  }



  //Funciones para mostrar categorias
  //
  //
  //
  //
  //

  async seleccionarLibrosPorCategoria(id_categoria: number, cantidad_datos: number) {
    let consulta = 'SELECT * FROM libro INNER JOIN categoria ON libro.id_categoria = categoria.id_categoria WHERE libro.id_categoria = ?'

    if (cantidad_datos > 0) {
      consulta += ` LIMIT ${cantidad_datos}`;
    }

    return this.database.executeSql(consulta, [id_categoria]).then((res) => {
      let libros: any[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          libros.push({
            ISBN: res.rows.item(i).ISBN,
            titulo: res.rows.item(i).titulo,
            autor: res.rows.item(i).autor,
            cantidad_paginas: res.rows.item(i).cantidad_paginas,
            sinopsis: res.rows.item(i).sinopsis,
            portada: res.rows.item(i).portada,
            nombre_categoria: res.rows.item(i).nombre_categoria,
          });
        }
      }
      return libros;
    }).catch(e => {
      console.error("Error obteniendo los libros por categoría: ", e);
      return [];
    });
  }
  //profe si esta leyendo esto vamos por el 7 

  async detallesLibrosGuardados(idUsuario: number, isbn: string) {
    return await this.database.executeSql(`SELECT guardados.id_guardados, libro.ISBN, libro.titulo, libro.autor, libro.cantidad_paginas, libro.sinopsis, libro.portada, 
      categoria.nombre_categoria, guardados.es_favorito, guardados.estado_lectura, guardados.pagina_actual 
    FROM libro 
    INNER JOIN guardados ON libro.ISBN = guardados.ISBN 
    INNER JOIN categoria ON libro.id_categoria = categoria.id_categoria 
    WHERE guardados.id_usuario = ? AND libro.ISBN = ?`, [idUsuario, isbn]).then(res => {
      if (res.rows.length > 0) {
        return {
          id_guardados : res.rows.item(0).id_guardados,
          ISBN: res.rows.item(0).ISBN,
          titulo: res.rows.item(0).titulo,
          autor: res.rows.item(0).autor,
          cantidad_paginas: res.rows.item(0).cantidad_paginas,
          sinopsis: res.rows.item(0).sinopsis,
          portada: res.rows.item(0).portada,
          nombre_categoria: res.rows.item(0).nombre_categoria,
          es_favorito: res.rows.item(0).es_favorito,
          estado_lectura: res.rows.item(0).estado_lectura,
          pagina_actual: res.rows.item(0).pagina_actual
        };
      }
      return null;
    }).catch(e => {
      console.error("Error obteniendo detalles del libro guardado:", e);
      return null;
    });
  }


  //// actualizar datos libros guardados
  //
  //

  actualizarFavorito(idUsuario: number, isbn: string, esFavorito: boolean) {
    console.log('Actualizando favorito en la base de datos:', esFavorito ? 1 : 0, idUsuario, isbn);
    return this.database.executeSql('UPDATE guardados SET es_favorito = ? WHERE id_usuario = ? AND ISBN = ?', [esFavorito ? 1 : 0, idUsuario, isbn]).then(() => {
      console.log('Favorito actualizado');
    })
  }
  actualizarEstadoLibro(idUsuario: number, isbn: string, estadoLibro: string){
    return this.database.executeSql('UPDATE guardados SET estado_lectura = ? WHERE id_usuario = ? AND ISBN = ?',[estadoLibro, idUsuario, isbn]).then(()=>{
      console.log('Estado de libro actualizado')
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','Error al actualizar estado del libro'+JSON.stringify(e))
    })
  }
  actualizarPaginaActual(idUsuario: number, isbn: string, paginaActual : number){
    return this.database.executeSql('UPDATE guardados SET pagina_actual = ? WHERE id_usuario = ? AND ISBN = ?',[paginaActual, idUsuario, isbn]).then(()=>{
      console.log('Pagina Actual Actualizada');
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','Error al actualizar pagina actual del libro'+JSON.stringify(e))
    })

  }
  elimnarGuardado(idguardado: number){
    return this.database.executeSql('DELETE FROM guardados WHERE id_guardados = ?',[idguardado]).then(()=>{
      console.log('Guardado Borrado');
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','Error eliminando de guardados'+JSON.stringify(e))
    }
    )
  }
  //seccion de libros del feed
  //
  //

  async obtenerLibrosPopulares() {
    return this.database.executeSql(
      `SELECT libro.ISBN, libro.titulo, libro.portada, COUNT(guardados.es_favorito) as totalFavoritos 
       FROM libro 
       INNER JOIN guardados ON libro.ISBN = guardados.ISBN 
       WHERE guardados.es_favorito = 1 
       GROUP BY libro.ISBN 
       ORDER BY totalFavoritos DESC 
       LIMIT 3`, []
    ).then(res => {
      let libros: LibrosPopulares[] = [];
      for (let i = 0; i < res.rows.length; i++) {
        libros.push({
          ISBN: res.rows.item(i).ISBN,
          titulo: res.rows.item(i).titulo,
          portada: res.rows.item(i).portada
        });
      }
      this.librosPopulares3.next(libros as any)
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','Error al intentar traer los libros populares'+JSON.stringify(e))
    })
  }
  async obtenerLibrosEstreno() {
    return this.database.executeSql(
      `SELECT * FROM estrenos ORDER BY fecha_estreno DESC LIMIT 3`, []
    ).then(res => {
      let estrenos: LibrosPopularesEstrenos[] = [];
      for (let i = 0; i < res.rows.length; i++) {
        estrenos.push({
          titulo: res.rows.item(i).titulo,
          autor: res.rows.item(i).autor,
          portada: res.rows.item(i).portada
        });
      }
      this.librosEstrenos3.next(estrenos as any)
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','Error al intentar traer los libros estreno'+JSON.stringify(e))
    })
  }



  //seccion de las reseñas 
  //
  //
  //

  enviarResena(idusuario: number, isbn : string, resena : string, fecha : string){
    return this.database.executeSql('INSERT INTO resena (texto_resena, ISBN ,id_usuario, fecha_elaboracion_resena) VALUES(?,?,?,?)',[resena,isbn,idusuario, fecha])
  }
  selectResenas(){
    return this.database.executeSql('SELECT resena.id_resena, resena.texto_resena, resena.ISBN, resena.id_usuario, resena.estadoBan, resena.fecha_ban, resena.fecha_elaboracion_resena, usuario.username, libro.titulo FROM resena INNER JOIN usuario ON resena.id_usuario = usuario.id_usuario INNER JOIN libro ON resena.ISBN = libro.ISBN;',[]).then(res=>{
      let items: Resenas[]=[];
      if(res.rows.length > 0){
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id_resena: res.rows.item(i).id_resena,
            texto_resena:res.rows.item(i).texto_resena,
            isbn: res.rows.item(i).isbn,
            id_usuario: res.rows.item(i).id_usuario,
            estadoBan: res.rows.item(i).estadoBan,
            fecha_ban: res.rows.item(i).fecha_ban,
            fecha_elaboracion_resena: res.rows.item(i).fecha_elaboracion_resena,
            username: res.rows.item(i).username,
            titulo: res.rows.item(i).titulo
          })
          this.listadoResenas.next(items as any)
        }
      }
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error con la consulta de las reseñas'+JSON.stringify(e))
    })
  }
  actualizarBanResena(nEstadoBan : boolean, idResena : number){
    return this.database.executeSql('UPDATE resena SET estadoBan = ? WHERE id_resena = ?',[nEstadoBan  ? 1 : 0 , idResena]).then(()=>{
      console.log('Actualizado correctamente');
    })
  }
  eliminarResena(id_resena : number){
    return this.database.executeSql('DELETE FROM resena WHERE id_resena = ?',[id_resena]).then(()=>{
      this.toast.GenerarToast('Reseña eliminada exitosamente',2000,'bottom')
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','problema intentando eliminar la reseña'+JSON.stringify(e))
    })

  }


  //Seccion Estrenos
  //
  //
  //

  selectEstrenos(){
    return this.database.executeSql('SELECT * FROM estrenos',[]).then(res=>{
      let items : Estrenos[]=[]
      if(res.rows.length > 0){
        for (let i = 0; i < res.rows.length; i++){
          items.push({
            id_estreno: res.rows.item(i).id_estreno,
            titulo: res.rows.item(i).titulo,
            autor: res.rows.item(i).autor,
            fecha_estreno: res.rows.item(i).fecha_estreno,
            portada: res.rows.item(i).portada
          })
          this.listadoEstrenos.next(items as any)
        }
      }
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error con la consulta de los estrenos'+JSON.stringify(e))
    })
  }
  insertarEstreno(titulo: string, autor : string, fecha : string, portada : string){
    return this.database.executeSql('INSERT INTO estrenos (titulo, autor, fecha_estreno, portada) VALUES(?,?,?,?)',[titulo,autor,fecha,portada]).then(()=>{
      console.log('Funciona');
    }).catch(e=>{
      this.alerta.GenerarAlerta('Error','Error al insertar estrenos admin'+JSON.stringify(e))
    })
  }
  modificarEstreno(titulo : string, autor : string, fecha_estreno : string, portada: string, id: number){
    return this.database.executeSql('UPDATE estrenos SET titulo = ?, autor = ?, fecha_estreno = ?, portada = ?  WHERE id_estreno = ?', [titulo,autor,fecha_estreno,portada,id]).then(res => {
      this.toast.GenerarToast('Libro modificado con exito', 3000, 'bottom')
      this.seleccionarLibros();
    }).catch(e => {
      this.alerta.GenerarAlerta('ERROR', 'Hubo un error al editar el estreno' + JSON.stringify(e))
    })
  }

  eliminarEstreno(id_estreno : number){
    return this.database.executeSql('DELETE FROM estrenos WHERE id_estreno = ?',[id_estreno]).then(()=>{
      console.log('Borrado perfectamente');
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error al borrar estreno'+JSON.stringify(e))
    })

  }


  ///recomendaciones (select, crear, borrar)

  selectRecomendaciones(){
    return this.database.executeSql('SELECT * FROM recomendacion',[]).then(res=>{
      let items : Recomendaciones[]=[]
      if(res.rows.length > 0){
        for (let i = 0; i < res.rows.length; i++){
          items.push({
            id_recomendacion: res.rows.item(i).id_recomendacion,
            titulo_recomendacion: res.rows.item(i).titulo_recomendacion,
            texto_recomendacion: res.rows.item(i).texto_recomendacion,
            id_usuario: res.rows.item(i).id_usuario
        })
        }
        this.listadoRecomendaciones.next(items as any)
      }
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error al seleccionar recomendaciones'+JSON.stringify(e))
    })
  }

  insertarRecomendacion(  titulo:string, recomendacion:string, id_usuario: number){
    return this.database.executeSql('INSERT INTO recomendacion (titulo_recomendacion, texto_recomendacion, id_usuario) VALUES(?,?,?)',[titulo,recomendacion,id_usuario]).then(()=>{
      console.log('Funciona la insertacion de la recomendacion');
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error al ingresar recomendacion'+JSON.stringify(e))
    })
  }

  eliminarRecomendacion(id_recomendacion: number){
    return this.database.executeSql('DELETE FROM recomendacion WHERE id_recomendacion = ?',[id_recomendacion]).then(()=>{
      console.log('Eliminado correctamente');
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error al eliminar recomendaciones'+JSON.stringify(e))
    })
  }

  //recuperar contraseña
  //
  revisarCorreoExistente(correo: string){
    return this.database.executeSql('SELECT * FROM usuario WHERE correo_user = ?',[correo]).then(res=>{
      let usuario = null;
      if (res.rows.length > 0) {
        usuario = {
          id_usuario: res.rows.item(0).id_usuario,
          correo_user: res.rows.item(0).correo_user,
        };
      }
      return usuario;
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error al eliminar recomendaciones'+JSON.stringify(e))
    })
  }



  modifcarContrasena(contraN :string, idusuario: number){
    return this.database.executeSql('UPDATE usuario SET password_user = ? WHERE id_usuario = ?',[contraN,idusuario]).then(()=>{
      console.log('Funciono el update');
    }).catch(e=>{
      this.alerta.GenerarAlerta('ERROR','Error al editar la contraseña'+JSON.stringify(e))
    })
  }



  // Depuracion

  existenDatos() {
    this.database.executeSql('SELECT COUNT(*) as total FROM libro', []).then(res => {
      this.alerta.GenerarAlerta('Aviso', 'Total de libros en la base de datos es de:' + res.rows.item(0).total)
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
