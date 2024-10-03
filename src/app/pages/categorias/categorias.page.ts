import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private router:Router) { }

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