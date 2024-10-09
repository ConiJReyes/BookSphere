import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';
import { DBserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  usuario: string = '';
  password: string = '';

  mostrarContra :boolean = false;



  constructor(
    private router: Router,
    private alerta : AlertsService,
    private menuControlelr: MenuController,
    private bd : DBserviceService
  ) {
    //Eliminar los menus de esta pagina

    this.menuControlelr.enable(false, 'MenuPrincipal');
    this.menuControlelr.enable(false, 'MenuAdministrador');

  }

  //Funcion para iniciar sesion, tiene condiciones para evitar que no se ingresen datos, que los datos sean incorrectos
  //o para entrar como administrador


  inicioSesion() {
    if (!this.usuario || !this.password) {
      this.alerta.GenerarAlerta('Error','Debe ingresar datos');
    }else{
      this.bd.inicioSesionUsuario(this.usuario, this.password).then(usuario=>{
        if(usuario){
          if(usuario.id_rol === 1){
            this.router.navigate(['/administrador']);
          }else{
            this.router.navigate(['/feed']);
          }
          this.usuario = "";
          this.password = "";
        }else{
          this.password = "";
          this.alerta.GenerarAlerta('Error', 'Datos Incorrectos o no se a encontrado Usuario')
        }
      }).catch(e => {
        this.alerta.GenerarAlerta('Error', 'Error al iniciar sesión: ' + JSON.stringify(e));
      });
    }
  }

  registrarse() {
    this.usuario = ""
    this.password = ""
    this.router.navigate(['/registrarse'])
  }


  recuperarCuenta() {
    this.router.navigate(['/recuperar-contra'])
  }

  togglemostrarContra() {
    this.mostrarContra = !this.mostrarContra;
  }

  ngOnInit() { }
}
