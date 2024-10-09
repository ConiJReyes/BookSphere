import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController} from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {
//variables
recomendacion:string=""

  constructor(private router:Router ,private menuController: MenuController,private toast : ToastsService) {

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')

   }
 
  
  EnviarRecomendacion(){
    if(!this.recomendacion){
      this.toast.GenerarToast('Ingrese una recomendacion para continuar',3000,"bottom")
    }else{
      this.toast.GenerarToast('Enviado con exito',3000,"bottom")
      this.router.navigate(['/acercade'])
    }
  }



  ngOnInit() {
  }

}
