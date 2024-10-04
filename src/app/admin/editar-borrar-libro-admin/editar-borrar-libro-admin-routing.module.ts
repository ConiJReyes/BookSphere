import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarBorrarLibroAdminPage } from './editar-borrar-libro-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EditarBorrarLibroAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarBorrarLibroAdminPageRoutingModule {}
