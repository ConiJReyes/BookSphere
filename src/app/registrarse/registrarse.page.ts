import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  usuario : string | undefined;
  correo : string | undefined;
  password : string | undefined;


  constructor() { }

  ngOnInit() {
  }

}
