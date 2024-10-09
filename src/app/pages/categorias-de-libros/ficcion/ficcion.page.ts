import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ficcion',
  templateUrl: './ficcion.page.html',
  styleUrls: ['./ficcion.page.scss'],
})
export class FiccionPage implements OnInit {

  constructor(private menu : MenuController) { 
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }

}
