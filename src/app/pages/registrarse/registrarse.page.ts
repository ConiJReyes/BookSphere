import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage {
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;

  constructor() {}

  register() {
    console.log('Registrando usuario:', this.username, this.email);
    // Aquí puedes agregar la lógica para el registro de usuario, como guardar los datos en un backend.
  }
}