import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-eliminar-libros-admin',
  templateUrl: './eliminar-libros-admin.page.html',
  styleUrls: ['./eliminar-libros-admin.page.scss'],
})
export class EliminarLibrosAdminPage implements OnInit {

  constructor(private router:Router,private toast: ToastsService) { }


  EliminarLibro(){
    this.toast.GenerarToast('El libro se ha eliminado correctamente',1300,"bottom")
    this.router.navigate(['/editar-borrar-libro-admin'])
  }

  ngOnInit() {
  }

}
