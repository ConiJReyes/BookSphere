import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cada-libro',
  templateUrl: './cada-libro.page.html',
  styleUrls: ['./cada-libro.page.scss'],
})
export class CadaLibroPage implements OnInit {

 seleccionado : string = "Leido";
 libro : any = { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling',paginas: 333 ,imagen: 'assets/img/librohp1.webp'}

  cantidadMensajes : number = 0;

  constructor(private menuController : MenuController, private ToastController:ToastController){

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }

  async generarToast(mensaje : string){
    const toast=await this.ToastController.create({
      message:mensaje,
      duration:2000,
      position:'top',
    })
    await toast.present();
  }
  
  //mostrar anuncio
  AnadiraFavoritos(){
    this.generarToast('Añadido con éxito');
  }


  cambiarLibroLeidoNo(){
    if(this.cantidadMensajes === 0){
      this.generarToast('Libro asignado como leido')
      this.cantidadMensajes = 1
      return;
    }

    if(this.cantidadMensajes === 1){
      this.generarToast('Libro asignado como leyendo')
      this.cantidadMensajes = 2
      return;
    }

    if(this.cantidadMensajes === 2){
      this.generarToast('Libro asignado como proximos a leer')
      this.cantidadMensajes = 0
      return;
      
    }


  }



  ngOnInit() {
  }

}
