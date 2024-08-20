import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
