import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DBserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  librosFiccion: any[] = [];
  librosNoFiccion: any[] = [];
  librosJuveniles: any[] = [];
  librosAcademicos: any[] = [];  
  librosEspecializados: any[] = [];
  librosComedia: any[] = [];
  librosTerror: any[] = [];


  constructor( private menu : MenuController, private router : Router, private bd: DBserviceService) {
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
    this.obtenerTresLibrosPorCategoria();
  }

  obtenerTresLibrosPorCategoria() {
    this.bd.seleccionarLibrosPorCategoria(1,3).then(libros => {
      this.librosFiccion = libros;
    });
    
    this.bd.seleccionarLibrosPorCategoria(2,3).then(libros => {
      this.librosNoFiccion = libros;
    });
  
    this.bd.seleccionarLibrosPorCategoria(3,3).then(libros => {
      this.librosJuveniles = libros;
    });

    this.bd.seleccionarLibrosPorCategoria(4,3).then(libros => {
      this.librosAcademicos = libros;
    });

    this.bd.seleccionarLibrosPorCategoria(5,3).then(libros => {
      this.librosEspecializados = libros;
    });

    this.bd.seleccionarLibrosPorCategoria(6,3).then(libros => {
      this.librosComedia = libros;
    });

    this.bd.seleccionarLibrosPorCategoria(7,3).then(libros => {
      this.librosTerror = libros;
    });
  }

  irTodosLosLibros(idcategoria: number) {
    this.router.navigate(['/cadacategoria'], { queryParams: { idcategoria } });
  }

  irLibro(libro : any){
    let NavigationExtras : NavigationExtras={
      state:{
        libroSeleccionado: libro
      }
    }
    this.router.navigate(['/detalleslibro'],NavigationExtras)
  }

}

 