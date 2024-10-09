import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { DBserviceService } from 'src/app/services/dbservice.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
//variables
  username: string ="";
  password: string ="";
  email: string ="";
  passwordR: string ="";

  correoValido : boolean = false;
  contraValida : boolean = false;
  contraIgual : boolean = false;

  mostrarContra: boolean = false;
  mostrarRepetirContra: boolean = false;

  // el alertcontroller es para las pantallaz de errores emergentes, bueno no necesariamente de errores
  constructor(
    private router: Router,
    private alerta: AlertsService,
    private toast : ToastsService,
    private bd: DBserviceService,
    private menuController: MenuController) {
      //No mostrar ninguno de los menu en esta pagina
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  toggleMostrarContra() {
    this.mostrarContra = !this.mostrarContra;
  }

  toggleMostrarRepetirContra() {
    this.mostrarRepetirContra = !this.mostrarRepetirContra;
  }

  

  ngOnInit() {
  }

//de esta forma porque el any no es tan util para casos de seguridad
  validarCorreo(email: string){
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
  }
//los boolean aca sirven para devolver el valor a si es verdadero o falso
  validarContrasena(password: string) {
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*_?&])[A-Za-z\d@#$!%*_?&]{8,}$/;
    return patron.test(password);
  }

  validacionDatosCorreo() {
    //Si hay algun campo vacio pide que se llenen todos o no saldran otras alertas
    if (!this.username || !this.password || !this.email || !this.passwordR) {
      this.alerta.GenerarAlerta('ERROR','Todos los campos deben ser ingresados');
      return;
    }

    this.correoValido = false;
    this.contraValida = false;
    this.contraIgual = false;

    // Validar correo
    if (!this.validarCorreo(this.email)) {
      this.correoValido = true;
    }

    // Validar formato de la contraseña
    if (!this.validarContrasena(this.password) || !this.validarContrasena(this.passwordR)) {
      this.contraValida = true;
    }

    // Verificar si las contraseñas coinciden
    if (this.password !== this.passwordR) {
      this.contraIgual = true;
    }

    // Si alguna validación falló, no continuar con el registro
    if (this.correoValido || this.contraValida || this.contraIgual) {
      return;
    }

      this.Registrarse();
    }
//Permite que los datos del user registrados esten disponibles en el login
Registrarse() {
  this.bd.verificarCorreoUsuario(this.username,this.email).then(existe=>{
    if(existe){
      this.alerta.GenerarAlerta('Error','El nombre de usuario o correo ya existen')
    }else{
      this.bd.insertarUsuario(this.username,this.email,this.password).then(()=>{  

        this.username = "";
        this.email = "";
        this.password = "";
        this.passwordR = "";

        this.toast.GenerarToast('Usuario creado exitosamente',3000,'bottom')
        this.router.navigate(['/login'])
      }).catch(e=>{
        this.alerta.GenerarAlerta('Error','Error al insertar los datos'+ JSON.stringify(e))
      })
    }
  })
}
}