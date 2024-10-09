import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-marcadoleido',
  templateUrl: './marcadoleido.page.html',
  styleUrls: ['./marcadoleido.page.scss'],
})
export class MarcadoleidoPage implements OnInit {
  libro: any = { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 333, imagen: 'assets/img/librohp1.webp', sinopsis: 'Harry Potter es un niño huérfano que vive con sus crueles tíos. En su undécimo cumpleaños, descubre que es un mago y ha sido aceptado en el Colegio Hogwarts de Magia. Allí, hace amigos como Ron y Hermione y se entera de su pasado: sobrevivió al ataque del malvado Lord Voldemort.', genero: 'Ficcion', ISBN: '978-0439708180' }
  calificar: number = 0; //las estrellitas
  //para lo el ion desplegable: BORRAR DESPUES
  opinion: string = '';


  constructor(private menuController:MenuController,
     private toast:ToastsService,
     private router:Router) {
    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
   }

  // CALIFICAR LIBRO:
  calificarlib(star: number) {
    this.calificar = star;
  }

  EnviarOpinion() {
    if (!this.opinion) {
      this.toast.GenerarToast('Ingrese al menos una opinión', 2000, "bottom");
    } else {
      this.toast.GenerarToast('Opinión enviada con éxito', 2000, "bottom");
      this.opinion = "";
    }
  }

  ngOnInit() {
  }

}
