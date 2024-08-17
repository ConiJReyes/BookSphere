import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarrabusquedaPage } from './barrabusqueda.page';

const routes: Routes = [
  {
    path: '',
    component: BarrabusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarrabusquedaPageRoutingModule {}
