import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicosPage } from './academicos.page';

const routes: Routes = [
  {
    path: '',
    component: AcademicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicosPageRoutingModule {}
