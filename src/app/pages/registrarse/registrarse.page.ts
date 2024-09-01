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
  validarCorreo(email: string): boolean {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
  }
//los boolean aca sirven para devolver el valor a si es verdadero o falso
  validarContrasena(password: string): boolean {
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    return patron.test(password);
  }

  validacionDatosCorreo() {
    //Si hay algun campo vacio pide que se llenen todos o no saldran otras alertas
    if (!this.username || !this.password || !this.email || !this.passwordR) {
      this.MostrarAlerta('Todos los campos son obligatorios');
      return;
    }

    if (!this.validarCorreo(this.email)) {
      //pide que el correo este con el formato que tiene @
      this.MostrarAlerta('Ingrese un correo válido');
      return;
    }

    if (!this.validarContrasena(this.password)) {
      this.MostrarAlerta('La contraseña debe tener al menos 6 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.');
      return;
    }

    if (this.password !== this.passwordR) {
      this.MostrarAlerta('Las contraseñas no coinciden, intentelo nuevamente.');
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