import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecializadosPage } from './especializados.page';

const routes: Routes = [
  {
    path: '',
    component: EspecializadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecializadosPageRoutingModule {}
