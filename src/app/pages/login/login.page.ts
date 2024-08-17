import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string | undefined;
  password: string | undefined;

  constructor() {}

  login() {
    console.log('Iniciando sesión con:', this.email);
    // Aquí puedes agregar la lógica para iniciar sesión, como la autenticación con un backend.
  }
}
