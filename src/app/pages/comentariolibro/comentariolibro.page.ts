import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-comentariolibro',
  templateUrl: './comentariolibro.page.html',
  styleUrls: ['./comentariolibro.page.scss'],
})
export class ComentariolibroPage implements OnInit {
  opinion: string = '';
  frases: string = '';

  constructor(private toast : ToastsService, private menu : MenuController) {
    this.menu.enable(true, 'MenuPrincipal')
    this.menu.enable(false, 'MenuAdministrador')
  }

  EnviarOpinion(){
    if(!this.opinion){
      this.toast.GenerarToast('Ingrese al menos una opinión',2000,"bottom");
    }else{
      this.toast.GenerarToast('Opinión enviada con éxito',2000,"bottom");
      this.opinion = "";
    }
  }

  EnviarFrases(){
    if(!this.frases){
      this.toast.GenerarToast('Ingrese al menos una frase',2000,"bottom");
    }else{
      this.toast.GenerarToast('Frases enviada con éxito',2000,"bottom");
      this.frases = "";
    }
  }

  ngOnInit() {}
}
