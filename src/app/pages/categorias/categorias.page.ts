import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor( private menu : MenuController, private router : Router) {
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }

  // redirecciones
  irAFiccion() {
    this.router.navigate(['/ficcion']); 
  }

  irAnoFiccion() {
    this.router.navigate(['/no-ficcion']); 
  }

  irJuveniles() {
    this.router.navigate(['/juveniles']); 
  }

  irAcademicos() {
    this.router.navigate(['/academicos']); 
  }

  irEspecializados() {
    this.router.navigate(['/especializados']); 
  }
}