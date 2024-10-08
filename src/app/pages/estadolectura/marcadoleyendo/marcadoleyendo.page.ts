import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-marcadoleyendo',
  templateUrl: './marcadoleyendo.page.html',
  styleUrls: ['./marcadoleyendo.page.scss'],
})
export class MarcadoleyendoPage implements OnInit {
  libro: any = {
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    paginas: 333,
    imagen: 'assets/img/librohp1.webp', sinopsis: 'Harry Potter es un niño huérfano que vive con sus crueles tíos. En su undécimo cumpleaños, descubre que es un mago y ha sido aceptado en el Colegio Hogwarts de Magia. Allí, hace amigos como Ron y Hermione y se entera de su pasado: sobrevivió al ataque del malvado Lord Voldemort.',
    genero: 'Ficcion',
    ISBN: '978-0439708180'
  }

  frases: string = '';
  paginasLeidas: number = 0;


  constructor(private menuController: MenuController, private toast: ToastsService, private alert: AlertController,
    private router: Router) {
    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }


  EnviarFrases() {
    if (!this.frases) {
      this.toast.GenerarToast('Ingrese al menos una frase', 2000, "bottom");
    } else {
      this.toast.GenerarToast('Frases enviada con éxito', 2000, "bottom");
      this.frases = "";
    }
  }

  // Método para validar el progreso de lectura
  validarProgreso() {
    if (this.paginasLeidas >= this.libro.paginas) {
      this.paginasLeidas = this.libro.paginas; // Evitar que exceda el total de páginas
      this.mostrarFelicidades(); // Mostrar el mensaje de felicitación
    }
  }

  // Método para mostrar el mensaje de felicitación
  async mostrarFelicidades() {
    const alert = await this.alert.create({
      header: '¡Felicidades!',
      message: 'Has terminado este libro. ¿Te gustaría dejar una reseña?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Sí',
          handler: () => {
            this.router.navigate(['/marcadoleido']);

          }
        }
      ]
    });

    await alert.present();
  }
}
