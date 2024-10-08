import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecializadosPageRoutingModule } from './especializados-routing.module';

import { EspecializadosPage } from './especializados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecializadosPageRoutingModule
  ],
  declarations: [EspecializadosPage]
})
export class EspecializadosPageModule {}
