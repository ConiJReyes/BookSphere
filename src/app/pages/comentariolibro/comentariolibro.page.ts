import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-comentariolibro',
  templateUrl: './comentariolibro.page.html',
  styleUrls: ['./comentariolibro.page.scss'],
})
export class ComentariolibroPage implements OnInit {
  opinion: string = '';
  frases: string = '';

  constructor(private toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  async submitOpinion() {
    if (this.opinion.trim() === '') {
      await this.presentToast('Por favor, ingresa una opinión.');
    } else {
      console.log('Opinión enviada:', this.opinion);
      // Aquí puedes agregar lógica para guardar la opinión
      await this.presentToast('Opinión enviada con éxito.');
      this.opinion = ''; // Limpia el campo después de enviar
    }
  }

  async submitFrases() {
    if (this.frases.trim() === '') {
      await this.presentToast('Por favor, ingresa al menos una frase.');
    } else {
      console.log('Frases enviadas:', this.frases);
      // Aquí puedes agregar lógica para guardar las frases
      await this.presentToast('Frases enviadas con éxito.');
      this.frases = ''; // Limpia el campo después de enviar
    }
  }

  ngOnInit() {}
}
