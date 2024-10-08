import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-academicos',
  templateUrl: './academicos.page.html',
  styleUrls: ['./academicos.page.scss'],
})
export class AcademicosPage implements OnInit {

  constructor(private menu : MenuController) { 
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  ngOnInit() {
  }

}
