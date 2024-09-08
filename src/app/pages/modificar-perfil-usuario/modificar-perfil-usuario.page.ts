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

  correoValido : boolean = false;
  contraValida : boolean = false;
  contraIgual : boolean = false;
  contraMisma : boolean = false

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

//
  validarCorreo(email: string){
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
  }
//
  validarContrasena(password: string) {
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*_?&])[A-Za-z\d@#$!%*_?&]{8,}$/;
    return patron.test(password);
  }



ModificarPerfil(){
  //Si hay algun campo vacio pide que se llenen todos o no saldran otras alertas
  if (!this.usuario||!this.correo||!this.contrasena||!this.contrasenaR) {
    this.generarToast('Debe ingresar todos los campos')
    return;
  }

  this.correoValido = false;
  this.contraValida = false;
  this.contraIgual = false;
  this.contraMisma = false;

  // Validar correo
  if (!this.validarCorreo(this.correo)) {
    this.correoValido = true;
  }

  // Validar formato de la contraseña
  if (!this.validarContrasena(this.contrasena) || !this.validarContrasena(this.contrasenaR)) {
    this.contraValida = true;
  }

  // Verificar si las contraseñas coinciden
  if (this.contrasena !== this.contrasenaR) {
    this.contraIgual = true;
  }

  if(this.usuario===this.usuarioval || this.contrasena === this.contrasenaval || this.correo === this.correoval || this.contrasenaval===this.contrasenaR){
    this.contraMisma = true;
  }

  // Si alguna validación falló, no continuar con el registro
  if (this.correoValido || this.contraValida || this.contraIgual || this.contraMisma) {
    return;
  }
    this.generarToast('Usuario Modificado correctamente')
    this.router.navigate(['/perfilusuario'])
  }


  ngOnInit() {
  }

}
