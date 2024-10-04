import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-anadir-libros-admin',
  templateUrl: './anadir-libros-admin.page.html',
  styleUrls: ['./anadir-libros-admin.page.scss'],
})
export class AnadirLibrosAdminPage implements OnInit {
  //variables
  nomLibAnadir: string = '';
  autorLibAnadir: string = '';
  categoriaLibAnadir: string = '';
  descripcionLibAnadir: string = '';
  //le habia puesto con number pero mostraba el 0 que le puse, no se si hay otra manera de hacerlo sin el any, demas que si
  paginasLibAnadir: any = '';

  constructor(
    private menuController: MenuController,
    private router: Router,
    private toast: ToastsService
  ) {
    // CONFIGURACIONES MENU
    this.menuController.enable(true, 'MenuAdministrador');
    this.menuController.enable(false, 'MenuPrincipal');
  }

  //Funcion para ejecutar el boton
  //creo que hay que validar que en la de paginas sea solo con numeros y no con letras
  AnadirLibro() {
    if (
      !this.nomLibAnadir ||
      !this.autorLibAnadir ||
      !this.categoriaLibAnadir ||
      !this.descripcionLibAnadir ||
      this.paginasLibAnadir === ''
    ) {
      this.toast.GenerarToast(
        'Todos los campos son obligatorios',
        4500,
        'bottom'
      );
      return;
    }

    // Validacion de numeros de las paginas
    if (this.paginasLibAnadir <= 0) {
      this.toast.GenerarToast(
        'La cantidad de páginas no puede ser menor o igual a 0',
        4500,
        'bottom'
      );
      return;
    }

    this.toast.GenerarToast('Libro añadido con éxito', 4500, 'bottom');
    this.router.navigate(['/ver-libros-admin']);
  }

  ngOnInit() {}
}
