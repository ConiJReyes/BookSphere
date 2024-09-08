import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-libros-estrenos',
  templateUrl: './libros-estrenos.page.html',
  styleUrls: ['./libros-estrenos.page.scss'],
})
export class LibrosEstrenosPage implements OnInit {

  librosEstrenos : any [] = [
    {titulo: 'La isla de la mujer dormida', autor: 'Arturio Perez Reverte', imagen: 'assets/img/Laisladelamujerdormida.webp', descripcion: 'Una novela de mar, amor y aventuras en el Egeo durante los años de la Guerra Civil española',FechaEstreno:'20 de enero de 2025'},
    {titulo: 'Quedará el amor', autor: 'Alice Kellen', imagen: 'assets/img/quedaraelamor.webp', descripcion: 'La gran novela de Alice Kellen. Un amor tan intenso y cálido como una tarde de verano',FechaEstreno:'24 de diciembre de 2024'},
    {titulo: 'Mesa para dos', autor: 'Amor Towles', imagen: 'assets/img/mesaparados.webp', descripcion: 'Una mesa para dos porfavor, con esa frase comienza la gran obra literaria de amor prohibido entre dos amantes que solo esperan un final tragico entre ellos',FechaEstreno:'05 de septiembre de 2024'},
    {titulo: 'El mejor libro del mundo', autor: 'Manuel Vilas', imagen: 'assets/img/Elmejorlibrodelmundo.webp', descripcion: 'Todo en literatura es pura ficción. Este libro cuenta la verdad que nadie dice.',FechaEstreno:'18 de octubre de 2024'}
  ]
  constructor(private menuController: MenuController) { 

    this.menuController.enable(true, 'MenuPrincipal');
    this.menuController.enable(false, 'MenuAdministrador');
    
  }

  ngOnInit() {
  }

}
