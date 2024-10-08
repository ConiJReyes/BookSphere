import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-usuario-admin',
  templateUrl: './gestion-usuario-admin.page.html',
  styleUrls: ['./gestion-usuario-admin.page.scss'],
})
export class GestionUsuarioAdminPage implements OnInit {
  usuarios = [
    { nombre: 'Usuario 1', correo: 'usuario1@example.com' },
    { nombre: 'Usuario 2', correo: 'usuario2@example.com' },
  ];
  usuarioSeleccionado: any;


  constructor(private menuController:MenuController) { 
    this.menuController.enable(true, 'MenuAdministrador');
    this.menuController.enable(false, 'MenuPrincipal');
  }
  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
  }

  guardarCambios() {
    console.log('Cambios guardados:', this.usuarioSeleccionado);
  
  }
  ngOnInit() {
  }

}
