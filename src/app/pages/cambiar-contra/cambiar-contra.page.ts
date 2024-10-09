import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.page.html',
  styleUrls: ['./cambiar-contra.page.scss'],
})
export class CambiarContraPage implements OnInit {
  //variables
  contra : string="";
  repetircontra : string ="";

  mostrarContra: boolean = false;
  mostrarRepetirContra: boolean = false;

  constructor(private router: Router, private menuController: MenuController,private toast : ToastsService) {
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  toggleMostrarContra() {
    this.mostrarContra = !this.mostrarContra;
  }

  toggleMostrarRepetirContra() {
    this.mostrarRepetirContra = !this.mostrarRepetirContra;
  }
  


  CambiarContra() {
    if (!this.contra || !this.repetircontra) {
      this.toast.GenerarToast('Los campos no pueden estar vacios',4500,"bottom");
    } else if (this.contra !== this.repetircontra) {
      this.toast.GenerarToast('Las contraseñas no coinciden',4500,"bottom");
    } else if(this.contra.length >= 8 || this.repetircontra,length >= 8){
      this.toast.GenerarToast('La contraseña debe mayor a 8 caracteres',4500,"bottom");
    }else{
      this.toast.GenerarToast('Contraseña cambiada con exito',4500,"bottom")
      this.router.navigate(['/login']);

    }
  }

  ngOnInit() {
  }
}
