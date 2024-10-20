import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { DBserviceService } from 'src/app/services/dbservice.service';
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

  usuario : any

  constructor(private router: Router, private menuController: MenuController,private toast : ToastsService, private bd : DBserviceService, private alerta : AlertsService, private route: ActivatedRoute) {
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')

    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras.state?.['envioId']
      }
    })

  }

  toggleMostrarContra() {
    this.mostrarContra = !this.mostrarContra;
  }

  toggleMostrarRepetirContra() {
    this.mostrarRepetirContra = !this.mostrarRepetirContra;
  }
  


  CambiarContra() {

    const contraLimpia = this.contra.trim()
    const contralrepLimpia = this.repetircontra.trim()
    
    if (!contraLimpia || !contralrepLimpia) {
      this.toast.GenerarToast('Los campos no pueden estar vacios',4500,"bottom");
    } else if (contraLimpia !== contralrepLimpia) {
      this.toast.GenerarToast('Las contraseñas no coinciden',4500,"bottom");
    } else if(contraLimpia.length >= 8 || contralrepLimpia.length >= 8){
      this.toast.GenerarToast('La contraseña debe mayor a 8 caracteres',4500,"bottom");
    }else{
      this.bd.modifcarContrasena(contraLimpia,this.usuario.id_usuario).then(()=>{
        this.toast.GenerarToast('Contraseña cambiada con exito',4500,"bottom")
        this.router.navigate(['/login']);  
      }).catch(e=>{
        this.alerta.GenerarAlerta('Error','problema cambiando la contraseña'+JSON.stringify(e))
      })
      
    }
  }

  ngOnInit() {
 
  }

  

}
