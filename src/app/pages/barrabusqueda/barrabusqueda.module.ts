import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarrabusquedaPageRoutingModule } from './barrabusqueda-routing.module';

import { BarrabusquedaPage } from './barrabusqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarrabusquedaPageRoutingModule
  ],
  declarations: [BarrabusquedaPage]
})
export class BarrabusquedaPageModule {}
