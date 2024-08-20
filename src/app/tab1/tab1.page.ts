import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchQuery: string = '';
  filteredBooks: any[] = []; // Array para almacenar los libros filtrados
  allBooks: any[] = []; // Array para almacenar todos los libros disponibles

  constructor() {}

  ngOnInit() {
    // Carga inicial de libros (esto debería venir de un servicio o API)
    this.allBooks = [
      { title: 'Libro 1', author: 'Autor 1', image: 'assets/img/libro1.jpg' },
      { title: 'Libro 2', author: 'Autor 2', image: 'assets/img/libro2.jpg' },
      { title: 'Libro 3', author: 'Autor 3', image: 'assets/img/libro3.jpg' },
      // Agrega más libros aquí
    ];
    this.filteredBooks = this.allBooks;
  }

  searchBooks(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredBooks = this.allBooks.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  }

  loadMoreBooks(event: any) {
    // Aquí puedes agregar lógica para cargar más libros
    // Simulando carga de más resultados
    setTimeout(() => {
      const moreBooks = [
        { title: 'Libro 4', author: 'Autor 4', image: 'assets/img/libro4.jpg' },
        { title: 'Libro 5', author: 'Autor 5', image: 'assets/img/libro5.jpg' },
        // Agrega más libros aquí
      ];
      this.allBooks = [...this.allBooks, ...moreBooks];
      this.searchBooks({ target: { value: this.searchQuery } });
      event.target.complete();
    }, 1000);
  }

}
