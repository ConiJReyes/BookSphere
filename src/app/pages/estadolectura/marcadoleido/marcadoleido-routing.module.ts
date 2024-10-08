import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcadoleidoPage } from './marcadoleido.page';

const routes: Routes = [
  {
    path: '',
    component: MarcadoleidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcadoleidoPageRoutingModule {}
