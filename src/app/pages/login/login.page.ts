import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | undefined;
  usuario: string | undefined;
  password: string | undefined;

  emailV: string = '';
  usuarioV: string = '';
  passwordV: string = '';

  usuarioAdmin: string = 'ADMIN';
  passwordAdmin: string = 'admin123';

  constructor(
    private router: Router,
    private activaterouter: ActivatedRoute,
    private alertcontroller: AlertController,
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

  async MostrarAlerta(mensaje: string) {
    const alerta = await this.alertcontroller.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alerta.present();
  }

  //Funcion para iniciar sesion, tiene condiciones para evitar que no se ingresen datos, que los datos sean incorrectos
  //o para entrar como administrador

  
  inicioSesion() {
    if (!this.usuario || !this.password) {
      this.MostrarAlerta('Debe ingresar datos');
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
    } else if(!this.passwordV && !this.usuarioV){
      this.password = ""
      this.MostrarAlerta('Cree un usuario');
    } else {
      this.password = ""
      this.MostrarAlerta('Los datos son incorrectos');
    }
  }

  registrarse(){
    this.usuario = ""
    this.password = ""
    this.router.navigate(['/registrarse'])
  }


  recuperarCuenta(){
    if(!this.usuarioV || !this.passwordV){
      this.MostrarAlerta('Cree un usuario')
    }else{
      this.router.navigate(['/recuperar-contra'])
      
    }
  }

  ngOnInit() {}
}
