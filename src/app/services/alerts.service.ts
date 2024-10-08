import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private alertController : AlertController) { }

  async GenerarAlerta(header : string, msg : string){
    const alerta = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    })
    await alerta.present();
  }

  
}
