import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarLibrosAdminPageRoutingModule } from './eliminar-libros-admin-routing.module';

import { EliminarLibrosAdminPage } from './eliminar-libros-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarLibrosAdminPageRoutingModule
  ],
  declarations: [EliminarLibrosAdminPage]
})
export class EliminarLibrosAdminPageModule {}
