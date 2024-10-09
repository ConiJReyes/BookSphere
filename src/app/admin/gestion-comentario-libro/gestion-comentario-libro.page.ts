import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-comentario-libro',
  templateUrl: './gestion-comentario-libro.page.html',
  styleUrls: ['./gestion-comentario-libro.page.scss'],
})
export class GestionComentarioLibroPage implements OnInit {

  constructor(private router: Router,private menuController: MenuController) {
        // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuAdministrador');
        this.menuController.enable(false, 'MenuPrincipal');
   }

  ngOnInit() {}


  goToComentarios(libroId: number) {
    this.router.navigate(['/comentariolibro', libroId]); 
  }
}
