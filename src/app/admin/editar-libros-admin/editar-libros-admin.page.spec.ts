import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarLibrosAdminPage } from './editar-libros-admin.page';

describe('EditarLibrosAdminPage', () => {
  let component: EditarLibrosAdminPage;
  let fixture: ComponentFixture<EditarLibrosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLibrosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
