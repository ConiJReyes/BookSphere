import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { CameraService } from 'src/app/services/camera.service';
import { DBserviceService } from 'src/app/services/dbservice.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-modificar-perfil-usuario',
  templateUrl: './modificar-perfil-usuario.page.html',
  styleUrls: ['./modificar-perfil-usuario.page.scss'],
})
export class ModificarPerfilUsuarioPage implements OnInit {
//variables

  idUsuario! : number

  usuario : any = {
    username : '',
    correo: '',
    foto_perfil : ''
  }


  contrasena! : string
  contrasenaR!: string



  correoValido : boolean = false;
  contraValida : boolean = false;
  contraIgual : boolean = false;
  contraMisma : boolean = false

  mostrarContra: boolean = false;
  mostrarRepetirContra: boolean = false;

  constructor(private toast : ToastsService,private router:Router,private activatedrouter:ActivatedRoute, private menu : MenuController, private validation : ValidationsService, private bd : DBserviceService, private camera: CameraService, private alerta: AlertsService) { 
    
    this.menu.enable(true,"MenuPrincipal");
    this.menu.enable(false, "MenuAdministrador");

    this.activatedrouter.queryParams.subscribe((param)=>{
      if (this.router.getCurrentNavigation()?.extras.state){
       this.idUsuario = this.router.getCurrentNavigation()?.extras?.state?.['usuarioSeleccionado'] 

      }
    })
   
  }


   async ingresarImagen(){
     try{
      const resultado = await this.camera.tomarFoto();
      if(resultado){
          this.usuario.foto_perfil = resultado
       this.toast.GenerarToast('Imagen añadida correctamente',2000,'bottom')
      }else{
       this.toast.GenerarToast('No se pudo obtener la imagen.',2000,'bottom')
      }
     }catch(error : any){
       if (error === 'User cancelled photos app'|| error.message === 'User cancelled photos app'){
         return
       }else{
         this.alerta.GenerarAlerta('Error','Error con ingresar Imagen'+ error) 
       }
      
     }
   }

  //mostrar contraseñas
  toggleMostrarContra() {
    this.mostrarContra = !this.mostrarContra;
  }

  toggleMostrarRepetirContra() {
    this.mostrarRepetirContra = !this.mostrarRepetirContra;
  }
//


ModificarPerfil(){
  //Si hay algun campo vacio pide que se llenen todos o no saldran otras alertas

  const usuarioLimpio = this.usuario.username.trim()
  const correoLimpio = this.usuario.correo_user.trim()
  const contraLimpia = this.contrasena.trim()
  const contralimpiraR = this.contrasenaR.trim()


  if (!usuarioLimpio||!correoLimpio||!contraLimpia||!contralimpiraR) {
    this.toast.GenerarToast('Debe ingresar todos los campos',5000,"bottom")
    return;
  }

  this.correoValido = false;
  this.contraValida = false;
  this.contraIgual = false;

  // Validar correo
  if (!this.validation.validarCorreo(correoLimpio)) {
    this.correoValido = true;
  }

  // Validar formato de la contraseña
  if (!this.validation.validarContrasena(contraLimpia) || !this.validation.validarContrasena(contralimpiraR)) {
    this.contraValida = true;
  }

  // Verificar si las contraseñas coinciden
  if (contraLimpia !== contralimpiraR) {
    this.contraIgual = true;
  }

  // Si alguna validación falló, no continuar con el registro
  if (this.correoValido || this.contraValida || this.contraIgual) {
    return;
  }
    this.bd.modificarUsuario(usuarioLimpio,correoLimpio,contraLimpia,this.usuario.foto_perfil,this.idUsuario).then(()=>{
      this.bd.traerUsuarioLogueado(this.idUsuario); // Emitir el cambio
      this.router.navigate(['/perfilusuario']);
    })
    
  }


  ngOnInit() {
    
    if (this.idUsuario) {
      this.bd.traerUsuarioLogueado(this.idUsuario)
      this.bd.fetchUsuarioPerfil().subscribe(data=>{
        if(data){
          this.usuario = data     
        }
      })
    }
  }
}
