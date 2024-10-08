import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademicosPageRoutingModule } from './academicos-routing.module';

import { AcademicosPage } from './academicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademicosPageRoutingModule
  ],
  declarations: [AcademicosPage]
})
export class AcademicosPageModule {}
