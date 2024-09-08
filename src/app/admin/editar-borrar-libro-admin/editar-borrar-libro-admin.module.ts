import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarBorrarLibroAdminPageRoutingModule } from './editar-borrar-libro-admin-routing.module';

import { EditarBorrarLibroAdminPage } from './editar-borrar-libro-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarBorrarLibroAdminPageRoutingModule
  ],
  declarations: [EditarBorrarLibroAdminPage]
})
export class EditarBorrarLibroAdminPageModule {}
