import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-todos-los-libros',
  templateUrl: './todos-los-libros.page.html',
  styleUrls: ['./todos-los-libros.page.scss'],
})
export class TodosLosLibrosPage implements OnInit {

  libros: any[] = [
    // lista de libros clásicos
    { titulo: '1984', autor: 'George Orwell', imagen: 'assets/img/libro1984.jpg',paginas:328 },
    { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', imagen: 'assets/img/librogatsby.jpeg',paginas:224 },
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', imagen: 'assets/img/libroorgulloyprej.webp',paginas:416 },
    // Lista de libros de fantasía
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', imagen: 'assets/img/librohobbit.webp',paginas:310 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', imagen: 'assets/img/librohp1.webp',paginas:320 },
    { titulo: 'Harry Potter y la cámara secreta', autor: 'J.K. Rowling', imagen: 'assets/img/librohp2.webp', paginas:341 },
    { titulo: 'Harry Potter y el prisionero de Azkaban', autor: 'J.K. Rowling', imagen: 'assets/img/librohp3.webp',paginas:435 },
    { titulo: 'Harry Potter y el cáliz de fuego', autor: 'J.K. Rowling', imagen: 'assets/img/librohp4.webp',paginas:636 },
    { titulo: 'Harry Potter y la Orden del Fénix', autor: 'J.K. Rowling', imagen: 'assets/img/librohp5.webp',paginas:766 },
    { titulo: 'Harry Potter y el misterio del príncipe', autor: 'J.K. Rowling', imagen: 'assets/img/librohp6.webp',paginas:607 },
    { titulo: 'Harry Potter y las reliquias de la Muerte', autor: 'J.K. Rowling', imagen: 'assets/img/librohp7.avif',paginas:759 },
    { titulo: 'Canción de hielo y fuego: Juego de tronos', autor: 'George R.R. Martin', imagen: 'assets/img/librogot1.webp',paginas:835 },
    { titulo: 'Alas de sangre', autor: 'Rebecca Yarros', imagen: 'assets/img/alasdesangre.webp',paginas:384 },
  
    // lista de libros de terror
    { titulo: 'It', autor: 'Stephen King', imagen: 'assets/img/libroIt.webp',paginas:824 },
    { titulo: 'La maldición de Hill House', autor: 'Shirley Jackson', imagen: 'assets/img/librohillhouse.webp',paginas:246 },
    { titulo: 'El Exorcista', autor: 'William Peter Blatty', imagen: 'assets/img/libroexorcista.webp',paginas:448 },
    // agregar más categorías
    { titulo: 'Romper el círculo', autor: 'Colleen Hoover', imagen: 'assets/img/romperelcirculo.webp',paginas:384 },
    { titulo: 'Tan Poca Vida', autor: 'Hanya Yanagihara', imagen: 'assets/img/tanpocavida.webp',paginas:720 },
    { titulo: 'Libro Troll', autor: 'ElRubiusOMG', imagen:'assets/img/librotroll.webp',paginas:240}
  ];

  constructor(private menuController: MenuController) {
    
    // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuPrincipal');
        this.menuController.enable(false, 'MenuAdministrador');
       }

  ngOnInit() {
  }


}
