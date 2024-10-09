import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-detalleslibro',
  templateUrl: './detalleslibro.page.html',
  styleUrls: ['./detalleslibro.page.scss'],
})
export class DetalleslibroPage implements OnInit {

  seleccionado: string = "Leido";
  libro: any = { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 333, imagen: 'assets/img/librohp1.webp', sinopsis: 'Harry Potter es un niño huérfano que vive con sus crueles tíos. En su undécimo cumpleaños, descubre que es un mago y ha sido aceptado en el Colegio Hogwarts de Magia. Allí, hace amigos como Ron y Hermione y se entera de su pasado: sobrevivió al ataque del malvado Lord Voldemort.', genero: 'Ficcion', ISBN: '978-0439708180' }

  cantidadMensajes: number = 0;

  //ESTADO DE LECTURA
  estadoLibro: string='';

  constructor(private menuController: MenuController, private toast: ToastsService, private router: Router,private alertController:AlertController) {

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  //mostrar anuncio
  AnadiraFavoritos() {
    this.toast.GenerarToast('Añadido con éxito', 2000, "top");
  }

  cambiarEstadoLibro() {
    switch (this.estadoLibro) {
      case 'leido':
        console.log('El libro ha sido marcado como Leído.');
        this.marcarComoLeido();
        break;
      case 'leyendo':
        console.log('El libro está en progreso (Leyendo).');
        this.marcarComoLeyendo();
        break;
      case 'quieroleer':
        console.log('El libro ha sido marcado como Quiero Leer.');
        this.marcarComoQuieroLeer();
        break;
      default:
        console.log('Selecciona un estado.');
    }
  }

  marcarComoLeido() {
    this.router.navigate(['/marcadoleido']);
  }

  marcarComoLeyendo() {
    this.router.navigate(['/marcadoleyendo']);
  }

  marcarComoQuieroLeer() {
    // Muestra un mensaje de alerta
    this.alertController.create({
      message: 'Agregado a "Quiero leer" con éxito',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigate(['/perfilusuario']); // 
        }
      }]
    }).then(alert => alert.present());
  }
  
  // redireccionar
  comentarLibro() {
    this.router.navigate(['/comentariolibro']);
  }

  ngOnInit() {
  }

}
