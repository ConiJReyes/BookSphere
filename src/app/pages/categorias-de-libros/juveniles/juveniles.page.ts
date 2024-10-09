import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-juveniles',
  templateUrl: './juveniles.page.html',
  styleUrls: ['./juveniles.page.scss'],
})
export class JuvenilesPage implements OnInit {

  constructor(private menu : MenuController) { 
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }

}
