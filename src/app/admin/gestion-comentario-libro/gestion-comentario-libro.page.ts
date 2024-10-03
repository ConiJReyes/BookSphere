import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-gestion-comentario-libro',
  templateUrl: './gestion-comentario-libro.page.html',
  styleUrls: ['./gestion-comentario-libro.page.scss'],
})
export class GestionComentarioLibroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  goToComentarios(libroId: number) {
    this.router.navigate(['/comentariolibro', libroId]); 
  }
}
