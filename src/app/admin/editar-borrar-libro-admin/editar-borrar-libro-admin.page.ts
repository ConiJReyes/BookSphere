import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editar-borrar-libro-admin',
  templateUrl: './editar-borrar-libro-admin.page.html',
  styleUrls: ['./editar-borrar-libro-admin.page.scss'],
})
export class EditarBorrarLibroAdminPage implements OnInit {

  Libros: any[] = [
    // lista de libros clásicos
    { titulo: '1984', autor: 'George Orwell', imagen: 'assets/img/libro1984.jpg' },
    { titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', imagen: 'assets/img/librogatsby.jpeg' },
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', imagen: 'assets/img/libroorgulloyprej.webp' },
    // Lista de libros de fantasía
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', imagen: 'assets/img/librohobbit.webp' },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', imagen: 'assets/img/librohp1.webp' },
    { titulo: 'Harry Potter y la cámara secreta', autor: 'J.K. Rowling', imagen: 'assets/img/librohp2.webp' },
    { titulo: 'Harry Potter y el prisionero de Azkaban', autor: 'J.K. Rowling', imagen: 'assets/img/librohp3.webp' },
    { titulo: 'Harry Potter y el cáliz de fuego', autor: 'J.K. Rowling', imagen: 'assets/img/librohp4.webp' },
    { titulo: 'Harry Potter y la Orden del Fénix', autor: 'J.K. Rowling', imagen: 'assets/img/librohp5.webp' },
    { titulo: 'Harry Potter y el misterio del príncipe', autor: 'J.K. Rowling', imagen: 'assets/img/librohp6.webp' },
    { titulo: 'Harry Potter y las reliquias de la Muerte', autor: 'J.K. Rowling', imagen: 'assets/img/librohp7.avif' },
    { titulo: 'Canción de hielo y fuego: Juego de tronos', autor: 'George R.R. Martin', imagen: 'assets/img/librogot1.webp' },
    { titulo: 'Alas de sangre', autor: 'Rebecca Yarros', imagen: 'assets/img/alasdesangre.webp' },
  
    // lista de libros de terror
    { titulo: 'It', autor: 'Stephen King', imagen: 'assets/img/libroIt.webp' },
    { titulo: 'La maldición de Hill House', autor: 'Shirley Jackson', imagen: 'assets/img/librohillhouse.webp' },
    { titulo: 'El Exorcista', autor: 'William Peter Blatty', imagen: 'assets/img/libroexorcista.webp' },
    // agregar más categorías
    { titulo: 'Romper el círculo', autor: 'Colleen Hoover', imagen: 'assets/img/romperelcirculo.webp' },
    { titulo: 'Tan Poca Vida', autor: 'Hanya Yanagihara', imagen: 'assets/img/tanpocavida.webp' },
  ];
  
  constructor(private menuController: MenuController) {
    
    // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuAdministrador');
        this.menuController.enable(false, 'MenuPrincipal');
       }

  ngOnInit() {
  }

}
