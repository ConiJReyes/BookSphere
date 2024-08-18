import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalleslibro',
  templateUrl: './detalleslibro.page.html',
  styleUrls: ['./detalleslibro.page.scss'],
})
export class DetalleslibroPage implements OnInit {
  nombreLibro: string = 'El Señor de los Anillos';
  genero: string = 'Fantasía';
  autorLibro: string = 'J.R.R. Tolkien';
  categoria: string = 'Novela';
  sinopsis: string = 'Una épica historia de un hobbit que se embarca en una aventura para destruir un anillo poderoso.';
  isbn: string = '978-0261102385';
  estadoLectura: string = 'Leído';
  cantidadPaginas: number = 1178;
  
  constructor() { }

  ngOnInit() {
  }

}
