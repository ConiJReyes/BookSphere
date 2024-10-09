import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  correo : string = "";

  constructor(private alerta: AlertsService,private router : Router, private menuController: MenuController) { 
    
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')

  }


  ngOnInit() {
  }


  validarCorreo(correo : string){
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(correo)
  }

  irCambiarContra(){
    if(!this.correo){
      this.alerta.GenerarAlerta('Error','Debe Ingresar un correo')
    }else if(!this.validarCorreo(this.correo)){
      this.alerta.GenerarAlerta('Error','Debe Ingresar un correo valido')
    }else{
      this.router.navigate(['/cambiar-contra'])}
  }


}
