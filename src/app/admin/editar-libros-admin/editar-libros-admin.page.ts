import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController} from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-editar-libros-admin',
  templateUrl: './editar-libros-admin.page.html',
  styleUrls: ['./editar-libros-admin.page.scss'],
})
export class EditarLibrosAdminPage implements OnInit {
  //variables
  nomLibro:string="Harry Potter"
  autorLibro:string="J.K Rowling"
  categoriaLibro:string="Fantasia y magia"
  descripcionLibro:string="Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería."

  constructor(private router: Router, private menuController: MenuController, private toast : ToastsService) {

    // CONFIGURACIONES MENU
    this.menuController.enable(true, 'MenuAdministrador');
    this.menuController.enable(false, 'MenuPrincipal');
  }

  // Función para ejecutar
  EditarLibros() {
    if (!this.nomLibro||!this.autorLibro||!this.categoriaLibro||!this.descripcionLibro) {
      this.toast.GenerarToast('No puede haber ningún campo vacío',4500,"bottom");
    } else {
      this.toast.GenerarToast('Sus cambios se realizaron correctamente',4500,"bottom")
      this.router.navigate(['/editar-borrar-libro-admin']);

    }
  }

  ngOnInit() {
  }
}
