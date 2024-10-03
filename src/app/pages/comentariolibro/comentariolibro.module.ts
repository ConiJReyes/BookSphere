import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariolibroPageRoutingModule } from './comentariolibro-routing.module';

import { ComentariolibroPage } from './comentariolibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentariolibroPageRoutingModule
  ],
  declarations: [ComentariolibroPage]
})
export class ComentariolibroPageModule {}
