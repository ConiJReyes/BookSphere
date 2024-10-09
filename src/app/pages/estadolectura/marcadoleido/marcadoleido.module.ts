import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcadoleidoPageRoutingModule } from './marcadoleido-routing.module';

import { MarcadoleidoPage } from './marcadoleido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcadoleidoPageRoutingModule
  ],
  declarations: [MarcadoleidoPage]
})
export class MarcadoleidoPageModule {}
