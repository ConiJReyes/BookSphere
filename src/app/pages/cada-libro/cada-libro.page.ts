import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController} from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-cada-libro',
  templateUrl: './cada-libro.page.html',
  styleUrls: ['./cada-libro.page.scss'],
})
export class CadaLibroPage implements OnInit {

 seleccionado : string = "Leido";
 libro : any = { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling',paginas: 333 ,imagen: 'assets/img/librohp1.webp'}

  cantidadMensajes : number = 0;

  constructor(private menuController : MenuController,private toast : ToastsService,private router:Router){

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  
  //mostrar anuncio
  AnadiraFavoritos(){
    this.toast.GenerarToast('Añadido con éxito',2000,"top");
  }


  cambiarLibroLeidoNo(){
    if(this.cantidadMensajes === 0){
      this.toast.GenerarToast('Libro asignado como leido',2000,"top")
      this.cantidadMensajes = 1
      return;
    }

    if(this.cantidadMensajes === 1){
      this.toast.GenerarToast('Libro asignado como leyendo',2000,"top")
      this.cantidadMensajes = 2
      return;
    }

    if(this.cantidadMensajes === 2){
      this.toast.GenerarToast('Libro asignado como proximos a leer',2000,"top")
      this.cantidadMensajes = 0
      return;
      
    }
  }

 // redireccionar
 comentarLibro() {
  this.router.navigate(['/comentariolibro']); 
}


  ngOnInit() {
  }

}
