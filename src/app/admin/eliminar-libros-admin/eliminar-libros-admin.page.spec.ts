import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarLibrosAdminPage } from './eliminar-libros-admin.page';

describe('EliminarLibrosAdminPage', () => {
  let component: EliminarLibrosAdminPage;
  let fixture: ComponentFixture<EliminarLibrosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarLibrosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
