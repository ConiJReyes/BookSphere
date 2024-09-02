import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
//variables
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  passwordR: string | undefined;


  correoValido : boolean = false;
  contraValida : boolean = false;
  contraIgual : boolean = false;


  // el alertcontroller es para las pantallaz de errores emergentes, bueno no necesariamente de errores
  constructor(
    private router: Router,
    private alertcontroller: AlertController,
    private menuController: MenuController) {
      //No mostrar ninguno de los menu en esta pagina
    this.menuController.enable(false, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }
//el metodo crea y muestra una alerta con un mensaje de error en el formulario
  async MostrarAlerta(message: string) {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alerta.present();
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
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return patron.test(password);
  }

  validacionDatosCorreo() {
    //Si hay algun campo vacio pide que se llenen todos o no saldran otras alertas
    if (!this.username || !this.password || !this.email || !this.passwordR) {
      this.MostrarAlerta('Todos los campos son obligatorios');
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
    let navigationextras: NavigationExtras = {
      state: {
        username: this.username,
        password: this.password,
        email: this.email
      }
    };
    
    this.router.navigate(['/login'], navigationextras);
  }
}