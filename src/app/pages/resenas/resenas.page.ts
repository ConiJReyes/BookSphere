import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Resenas } from 'src/app/modules/resenas';
import { DBserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.page.html',
  styleUrls: ['./resenas.page.scss'],
})
export class ResenasPage implements OnInit {

  resenas : Resenas[]=[]

  constructor(private menuController : MenuController, private bd :DBserviceService) { 

    this.menuController.enable(true, 'MenuPrincipal');
    this.menuController.enable(false, 'MenuAdministrador');
    
  }


  ngOnInit() {
    this.bd.selectResenas()
    this.bd.dbEstado().subscribe(res=>{
      if(res){
        this.bd.fetchResenas().subscribe(data=>{
          this.resenas = data.filter(x => !x.estadoBan)
        })
      }
      
    })
  }

}
