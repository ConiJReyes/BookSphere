import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoFiccionPage } from './no-ficcion.page';

const routes: Routes = [
  {
    path: '',
    component: NoFiccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoFiccionPageRoutingModule {}
