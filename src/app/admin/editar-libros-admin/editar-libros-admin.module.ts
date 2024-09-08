import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarLibrosAdminPageRoutingModule } from './editar-libros-admin-routing.module';

import { EditarLibrosAdminPage } from './editar-libros-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarLibrosAdminPageRoutingModule
  ],
  declarations: [EditarLibrosAdminPage]
})
export class EditarLibrosAdminPageModule {}
