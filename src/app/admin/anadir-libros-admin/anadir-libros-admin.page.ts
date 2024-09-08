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
//le habia puesto con number pero mostraba el 0 que le puse, no se si hay otra manera de hacerlo sin el any, demas que si
paginasLibAnadir:any=""

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
//creo que hay que validar que en la de paginas sea solo con numeros y no con letras
AnadirLibro() {
  if (!this.nomLibAnadir || !this.autorLibAnadir || !this.categoriaLibAnadir || !this.descripcionLibAnadir||!this.paginasLibAnadir) {
    this.generarToast('Todos los campos son obligatorios');
  } else {
    this.generarToast('Libro añadido con éxito')
    this.router.navigate(['/ver-libros-admin'])
  }
}

  ngOnInit() {
  }

}
