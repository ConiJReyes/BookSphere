import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoFiccionPageRoutingModule } from './no-ficcion-routing.module';

import { NoFiccionPage } from './no-ficcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoFiccionPageRoutingModule
  ],
  declarations: [NoFiccionPage]
})
export class NoFiccionPageModule {}
