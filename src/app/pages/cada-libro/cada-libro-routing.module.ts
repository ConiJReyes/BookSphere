import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadaLibroPage } from './cada-libro.page';

const routes: Routes = [
  {
    path: '',
    component: CadaLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadaLibroPageRoutingModule {}
