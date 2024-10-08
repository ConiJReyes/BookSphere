import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuvenilesPageRoutingModule } from './juveniles-routing.module';

import { JuvenilesPage } from './juveniles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuvenilesPageRoutingModule
  ],
  declarations: [JuvenilesPage]
})
export class JuvenilesPageModule {}
