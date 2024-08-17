import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.page.html',
  styleUrls: ['./perfilusuario.page.scss'],
})
export class PerfilusuarioPage implements OnInit {

  user: any = {
    photoUrl: 'assets/img/usuario.jpg',
    name: 'Nombre Usuario',
    email: 'usuario@example.com',
    readBooks: [
      { title: 'Libro 1', coverImage: 'assets/img/libro1.jpg' },
      { title: 'Libro 2', coverImage: 'assets/img/libro2.jpg' },
      { title: 'Libro 3', coverImage: 'assets/img/libro3.jpg' }
    ]
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBookDetail(book: any) {
    // Navegar a la página de detalles del libro
    this.navCtrl.navigateForward(`/book-detail/${book.title}`);
  }
}