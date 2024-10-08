import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  usuario: string = '';
  password: string = '';

  emailV: string = '';
  usuarioV: string = '';
  passwordV: string = '';

  usuarioAdmin: string = 'ADMIN';
  passwordAdmin: string = 'admin123';

  mostrarContra :boolean = false;



  constructor(
    private router: Router,
    private activaterouter: ActivatedRoute,
    private alerta : AlertsService,
    private menuControlelr: MenuController
  ) {
    //Eliminar los menus de esta pagina

    this.menuControlelr.enable(false, 'MenuPrincipal');
    this.menuControlelr.enable(false, 'MenuAdministrador');

    //Recepcionar los datos que vienen de registrar usuario

    this.activaterouter.queryParams.subscribe((param) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.emailV =
          this.router.getCurrentNavigation()?.extras?.state?.['email'];
        this.usuarioV =
          this.router.getCurrentNavigation()?.extras?.state?.['username'];
        this.passwordV =
          this.router.getCurrentNavigation()?.extras?.state?.['password'];
      }
    });
  }

  //funcion asincronica que crea una alerta

  


  //Funcion para iniciar sesion, tiene condiciones para evitar que no se ingresen datos, que los datos sean incorrectos
  //o para entrar como administrador


  inicioSesion() {
    if (!this.usuario || !this.password) {
      this.alerta.GenerarAlerta('Error','Debe ingresar datos');
    } else if (
      this.usuario === this.usuarioV &&
      this.password === this.passwordV
    ) {
      this.usuario = "";
      this.password = "";
      this.router.navigate(['/feed']);
    } else if (
      this.usuario === this.usuarioAdmin &&
      this.password === this.passwordAdmin
    ) {
      this.router.navigate(['/administrador']);
    } else if (!this.passwordV && !this.usuarioV) {
      this.password = ""
      this.alerta.GenerarAlerta('Error','Cree un usuario');
    } else {
      this.password = ""
      this.alerta.GenerarAlerta('Error','Los datos son incorrectos');
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
