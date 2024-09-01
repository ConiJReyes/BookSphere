import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarBorrarLibroAdminPage } from './editar-borrar-libro-admin.page';

describe('EditarBorrarLibroAdminPage', () => {
  let component: EditarBorrarLibroAdminPage;
  let fixture: ComponentFixture<EditarBorrarLibroAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBorrarLibroAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
