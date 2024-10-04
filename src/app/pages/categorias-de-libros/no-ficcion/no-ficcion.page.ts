import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-no-ficcion',
  templateUrl: './no-ficcion.page.html',
  styleUrls: ['./no-ficcion.page.scss'],
})
export class NoFiccionPage implements OnInit {

  constructor(private menu : MenuController) { 
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }

}
