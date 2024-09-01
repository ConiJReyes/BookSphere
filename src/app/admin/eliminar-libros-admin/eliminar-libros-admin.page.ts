import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-libros-admin',
  templateUrl: './eliminar-libros-admin.page.html',
  styleUrls: ['./eliminar-libros-admin.page.scss'],
})
export class EliminarLibrosAdminPage implements OnInit {

  constructor(private router:Router,private ToastController:ToastController) { }

  async generarToast(){
    const toast=await this.ToastController.create({
      message:'El libro se ha eliminado correctamente',
      duration:5000,
      position:'bottom',
    })
    await toast.present();
  }

  //funcion
  EliminarLibro(){
    this.generarToast()
    this.router.navigate(['/editar-borrar-libro-admin'])
  }

  ngOnInit() {
  }

}
