import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-anadir-libros-admin',
  templateUrl: './anadir-libros-admin.page.html',
  styleUrls: ['./anadir-libros-admin.page.scss'],
})
export class AnadirLibrosAdminPage implements OnInit {
//variables
nomLibAnadir:string=""
autorLibAnadir:string=""
categoriaLibAnadir:string=""
descripcionLibAnadir:string=""

  constructor(private menuController: MenuController,private router:Router,private ToastController:ToastController) {
    
    // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuAdministrador');
        this.menuController.enable(false, 'MenuPrincipal');
       }

       async generarToast(mensaje:string){
        const toast=await this.ToastController.create({
          message:mensaje,
          duration:4500,
          position:'bottom',
        })
        await toast.present();
      }
//Funcion para ejecutar el boton
AnadirLibro() {
  if (!this.nomLibAnadir || !this.autorLibAnadir || !this.categoriaLibAnadir || !this.descripcionLibAnadir) {
    this.generarToast('Todos los campos son obligatorios');
  } else {
    this.generarToast('Libro añadido con éxito')
    this.router.navigate(['/ver-libros-admin'])
  }
}

  ngOnInit() {
  }

}
