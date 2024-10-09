import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-especializados',
  templateUrl: './especializados.page.html',
  styleUrls: ['./especializados.page.scss'],
})
export class EspecializadosPage implements OnInit {

constructor(private menu : MenuController) { 
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }

}
