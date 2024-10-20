import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Libros } from 'src/app/modules/libros';
import { AlertsService } from 'src/app/services/alerts.service';
import { CameraService } from 'src/app/services/camera.service';
import { DBserviceService } from 'src/app/services/dbservice.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-ver-libros-admin',
  templateUrl: './ver-libros-admin.page.html',
  styleUrls: ['./ver-libros-admin.page.scss'],
})
export class VerLibrosAdminPage implements OnInit {

  arregloLibros: Libros[]= []
  libroSeleccionado : any
  estadoSelec: string = ''

  pestanaModificarLibro : boolean = false
  pestanaEliminarLibro : boolean = false

  constructor(private menuController: MenuController, private bd : DBserviceService,private toast :ToastsService, private camera: CameraService, private alerta : AlertsService) {
    
    // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuAdministrador');
        this.menuController.enable(false, 'MenuPrincipal');
       }

  ngOnInit() {
    this.bd.seleccionarLibros();
    this.bd.dbEstado().subscribe(res=>{
      if(res){
        this.bd.fetchLibros().subscribe(data=>{
          this.arregloLibros = data;
          
        })
      }
    })

  }

  validarInput(event: any) {
    const inputValue = event.target.value;
    if (inputValue < 0){ 
      this.libroSeleccionado.cantidad_paginas = 0;
    }
    
  }

  editarLibro(){
    if(this.libroSeleccionado){
      const isbn = this.libroSeleccionado.ISBN
      const titulo = this.libroSeleccionado.titulo
      const autor = this.libroSeleccionado.autor
      const cantidad_paginas = this.libroSeleccionado.cantidad_paginas
      const sinopsis = this.libroSeleccionado.sinopsis
      const portada = this.libroSeleccionado.portada
      const id_categoria = this.libroSeleccionado.id_categoria

      this.bd.editarLibros(isbn,titulo,autor,id_categoria,cantidad_paginas,sinopsis,portada)
      this.toast.GenerarToast('Libro actualizado con exito',3000,'bottom')
      this.cancelarEditar()
    }
  }
  

  eliminarLibro(){
    if(this.libroSeleccionado){
      const isbn = this.libroSeleccionado.ISBN
      this.bd.eliminarLibros(isbn);
      this.cancelarBorrar();
    }
  }


  
  abrirPestanaBorrar(libro: any){
    this.pestanaEliminarLibro = true
    this.libroSeleccionado = libro
  }

  abrirPestanaEditar(libro :any){
    this.pestanaModificarLibro = true
    this.libroSeleccionado = libro
  }

  cancelarBorrar(){
    this.pestanaEliminarLibro = false
  }
  cancelarEditar(){
    this.pestanaModificarLibro = false
  }

  async ingresarImagen(){
    try{
     const resultado = await this.camera.tomarFoto();
     if(resultado){
      this.libroSeleccionado.portada = resultado
      this.toast.GenerarToast('Imagen añadida correctamente',2000,'bottom')
     }else{
      this.toast.GenerarToast('No se pudo obtener la imagen.',2000,'bottom')
     }
    }catch(error : any){
      if (error === 'User cancelled photos app'|| error.message === 'User cancelled photos app'){
        return
      }else{
        this.alerta.GenerarAlerta('Error','Error con ingresar Imagen'+ error) 
      }
      
    }
  }

  validarEdicionLibros() {
    if (!this.libroSeleccionado.ISBN||!this.libroSeleccionado.titulo||!this.libroSeleccionado.autor||!this.libroSeleccionado.id_categoria||!this.libroSeleccionado.cantidad_paginas||!this.libroSeleccionado.sinopsis||!this.libroSeleccionado.portada) {
      this.toast.GenerarToast('No puede haber ningún campo vacío',4500,"bottom");
    } else {
      this.editarLibro()
    }
  }

}
