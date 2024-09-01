import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadaLibroPageRoutingModule } from './cada-libro-routing.module';

import { CadaLibroPage } from './cada-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadaLibroPageRoutingModule
  ],
  declarations: [CadaLibroPage]
})
export class CadaLibroPageModule {}
