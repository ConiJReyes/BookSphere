import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.page.html',
  styleUrls: ['./perfilusuario.page.scss'],
})
export class PerfilusuarioPage implements OnInit {

  usuario : string = "Usuario";
  password : string = "1234";
  email : string = "Usuario@example.cl";

  Libro1 : any = { titulo: 'Harry Potter y la Orden del Fénix', autor: 'J.K. Rowling', imagen: 'assets/img/librohp5.webp' }
  Libro2 : any = { titulo: 'Harry Potter y el cáliz de fuego', autor: 'J.K. Rowling', imagen: 'assets/img/librohp4.webp' }
  Libro3 : any = { titulo: 'Harry Potter y el prisionero de Azkaban', autor: 'J.K. Rowling', imagen: 'assets/img/librohp3.webp' }

  constructor(private menuController: MenuController, private router : Router) {
    
// CONFIGURACIONES MENU
    this.menuController.enable(true, 'MenuPrincipal');
    this.menuController.enable(false, 'MenuAdministrador');
   }

  ngOnInit() {
  }


  irModificarPerfil(){
    let navigationextras:NavigationExtras={
      state:{
        usuarioEnvio:this.usuario,
        passwodEnvio:this.password,
        emailEnvio:this.email
      }
    }

    this.router.navigate(['/modificar-perfil-usuario'],navigationextras)
  }

}
