import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  correo : string = "";

  constructor(private alertcontroller: AlertController,private router : Router, private menuController: MenuController) { 
    
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')

  }

  async generarAlerta(mensaje : string){
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: mensaje,
      buttons:['OK']
    })
    await alerta.present();
  }

  ngOnInit() {
  }


  validarCorreo(correo : string){
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(correo)
  }

  irCambiarContra(){
    if(!this.correo){
      this.generarAlerta('Debe Ingresar un correo')
    }else if(!this.validarCorreo(this.correo)){
      this.generarAlerta('Debe Ingresar un correo valido')
    }else{
      this.router.navigate(['/cambiar-contra'])}
  }


}
