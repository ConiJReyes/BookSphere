import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {
//variables
recomendacion:string=""

  constructor(private router:Router ,private menuController: MenuController,private ToastController:ToastController) {

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')

   }

  async generarToast(mensaje:string){
    const toast=await this.ToastController.create({
      message:mensaje,
      duration:3000,
      position:'bottom',
    })
  await toast.present();
  }
  
  EnviarRecomendacion(){
    if(!this.recomendacion){
      this.generarToast('Ingrese una recomendacion para continuar')
    }else{
      this.generarToast('Enviado con exito')
      this.router.navigate(['/acercade'])
    }
  }



  ngOnInit() {
  }

}
