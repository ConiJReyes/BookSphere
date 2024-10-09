import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { CameraService } from 'src/app/services/camera.service';
import { DBserviceService } from 'src/app/services/dbservice.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-anadir-libros-admin',
  templateUrl: './anadir-libros-admin.page.html',
  styleUrls: ['./anadir-libros-admin.page.scss'],
})
export class AnadirLibrosAdminPage implements OnInit {
  //variables

  isbnLibAnadir: string = '';
  nomLibAnadir: string = '';
  autorLibAnadir: string = '';
  categoriaLibAnadir! :number;
  paginasLibAnadir!: number;
  sinopsisLibAnadir: string = '';
  urlImagen: string ='';

  constructor(
    private menuController: MenuController,
    private router: Router,
    private toast: ToastsService,
    private camera: CameraService,
    private alerta : AlertsService,
    private bd : DBserviceService
  ) {
    // CONFIGURACIONES MENU
    this.menuController.enable(true, 'MenuAdministrador');
    this.menuController.enable(false, 'MenuPrincipal');
  }

  async ingresarImagen(){
    try{
     const resultado = await this.camera.tomarFoto();
     if(resultado){
      this.urlImagen = resultado
      this.toast.GenerarToast('Imagen añadida correctamente',2000,'bottom')
     }else{
      this.toast.GenerarToast('No se pudo obtener la imagen.',2000,'bottom')
     }
    }catch(error){
      if (error === 'User cancelled photos app'){
        return
      }else{
        this.alerta.GenerarAlerta('Error','Error con ingresar Imagen'+ error) 
      }
      
    }
  }

  //Funcion para ejecutar el boton
  //creo que hay que validar que en la de paginas sea solo con numeros y no con letras
  validacionAnadirLibro() {
    if (
      !this.isbnLibAnadir ||
      !this.nomLibAnadir ||
      !this.autorLibAnadir ||
      !this.categoriaLibAnadir ||
      !this.paginasLibAnadir ||
      !this.sinopsisLibAnadir||
      !this.urlImagen
    ) {
      this.toast.GenerarToast('Ingrese todo los campos para ingresar',2000,'bottom')
    }else{
      this.bd.insertarLibros(this.isbnLibAnadir,this.nomLibAnadir,this.autorLibAnadir,this.categoriaLibAnadir,this.paginasLibAnadir,this.sinopsisLibAnadir,this.urlImagen)
      this.isbnLibAnadir = ''
      this.nomLibAnadir = ''
      this.autorLibAnadir = ''
      this.categoriaLibAnadir!
      this.paginasLibAnadir!
      this.sinopsisLibAnadir = ''
      this.urlImagen = ''
      this.router.navigate(['/ver-libros-admin'])
    }

  }
  
  validarInputPaginas(event: KeyboardEvent) {
    const charCode = event.key;
    //hecho por Roderik mi bautizado ChatGPT
    if (!/^[0-9]$/.test(charCode) && charCode !== 'Backspace' && charCode !== 'ArrowLeft' && charCode !== 'ArrowRight' && charCode !== 'Delete') {
      event.preventDefault();
    }
  }

  ngOnInit() {}
}
