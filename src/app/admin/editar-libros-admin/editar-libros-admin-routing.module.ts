import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarLibrosAdminPage } from './editar-libros-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EditarLibrosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarLibrosAdminPageRoutingModule {}
