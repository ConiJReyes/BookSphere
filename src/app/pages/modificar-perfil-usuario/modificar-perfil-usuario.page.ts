import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-perfil-usuario',
  templateUrl: './modificar-perfil-usuario.page.html',
  styleUrls: ['./modificar-perfil-usuario.page.scss'],
})
export class ModificarPerfilUsuarioPage implements OnInit {
//variables
  usuario:string=""
  correo:string=""
  contrasena: string=""
  contrasenaR:string=""

  usuarioval:string=""
  correoval:string=""
  contrasenaval:string=""

  constructor(private ToastController:ToastController,private router:Router,private activatedrouter:ActivatedRoute) { 
    this.activatedrouter.queryParams.subscribe((param)=>{
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuarioval =
          this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnvio'];
        this.correoval =
          this.router.getCurrentNavigation()?.extras?.state?.['emailEnvio'];
        this.contrasenaval =
          this.router.getCurrentNavigation()?.extras?.state?.['passwodEnvio'];
      }
    })
  }
  async generarToast(mensaje:string){
    const toast=await this.ToastController.create({
      message:mensaje,
      duration:5000,
      position:'bottom',
    })
    await toast.present();
  }
//funcion para ejecutar el boton
  ModificarPerfil(){
  if(!this.usuario||!this.correo||!this.contrasena||!this.contrasenaR){
    this.generarToast('Rellene todos los campos para continuar');
  }else if(this.contrasena!==this.contrasenaR){
    this.generarToast('Las contraseñas no coinciden')
  }else if(this.contrasena===this.contrasenaval){
    this.generarToast('No se puede usar la contraseña anterior')
  }else
  {
    this.generarToast('Sus cambios se realizaron correctamente')
  this.router.navigate(['/perfilusuario'])
  
  }
}




  ngOnInit() {
  }

}
