import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentariolibroPage } from './comentariolibro.page';

const routes: Routes = [
  {
    path: '',
    component: ComentariolibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentariolibroPageRoutingModule {}
