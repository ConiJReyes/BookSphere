import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { DBserviceService } from 'src/app/services/dbservice.service';


@Component({
  selector: 'app-gestion-usuario-admin',
  templateUrl: './gestion-usuario-admin.page.html',
  styleUrls: ['./gestion-usuario-admin.page.scss'],
})
export class GestionUsuarioAdminPage implements OnInit {


  usuarioSeleccionado: any;

  arregloUsuarios : any = [
    {
      id_usuario : '',
      username : '',
      correo_user: '',
      id_rol: '',
    }
  ]

  constructor(private menuController:MenuController, private bd : DBserviceService, private alerta : AlertsService) { 
    this.menuController.enable(true, 'MenuAdministrador');
    this.menuController.enable(false, 'MenuPrincipal');
    
  }
  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
  }

  cerrarDetalles(){
    this.usuarioSeleccionado = null;
  }
  guardarCambios() {
    if(this.usuarioSeleccionado){
      const id = this.usuarioSeleccionado.id_usuario;
      const nombre = this.usuarioSeleccionado.username;
      const correo = this.usuarioSeleccionado.correo_user;

      this.bd.actualizarUsuarios(id,nombre,correo);

    }
  }

  eliminarUsuario(){
    if(this.usuarioSeleccionado){
      const id = this.usuarioSeleccionado.id_usuario
      const idRol = this.usuarioSeleccionado.id_rol
      if(idRol===1){
        this.alerta.GenerarAlerta('Aviso','No se puede eliminar un rol de Administrador')
      }else{
        this.bd.eliminarUsuario(id);
        this.cerrarDetalles();
      }
    }
  }
  
  ngOnInit() {
    this.bd.seleccionarUsuarios();
    this.bd.dbEstado().subscribe(res=>{
      if(res){
        this.bd.fetchUsuario().subscribe(data=>{
          this.arregloUsuarios = data;
        })
      }
    })
  }
 
}
