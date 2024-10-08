import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private menuController: MenuController) {
    
    // CONFIGURACIONES MENU
        this.menuController.enable(true, 'MenuPrincipal');
        this.menuController.enable(false, 'MenuAdministrador');
       }

  ngOnInit() {
  }

}
