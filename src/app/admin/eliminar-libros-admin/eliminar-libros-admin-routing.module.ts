import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarLibrosAdminPage } from './eliminar-libros-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarLibrosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarLibrosAdminPageRoutingModule {}
