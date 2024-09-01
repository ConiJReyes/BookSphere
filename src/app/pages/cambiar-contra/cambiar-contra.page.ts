import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.page.html',
  styleUrls: ['./cambiar-contra.page.scss'],
})
export class CambiarContraPage implements OnInit {
  //variables
  contra : string="";
  repetircontra : string ="";

  constructor(private router: Router, private menuController: MenuController, private ToastController: ToastController) {
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  async generarToast(mensaje: string) {
    const toast = await this.ToastController.create({
      message: mensaje,
      duration: 4500,
      position: 'bottom',
    })
    await toast.present();
  }

  CambiarContra() {
    if (!this.contra || !this.repetircontra) {
      this.generarToast('Los campos no pueden estar vacios');
    } else if (this.contra !== this.repetircontra) {
      this.generarToast('Las contraseñas no coinciden');
    } else if(this.contra.length < 8 || this.repetircontra,length <8){
      this.generarToast('La contraseña debe mayor a 8 caracteres');
    }else{
      this.generarToast('Contraseña cambiada con exito')
      this.router.navigate(['/login']);

    }
  }

  ngOnInit() {
  }
}
