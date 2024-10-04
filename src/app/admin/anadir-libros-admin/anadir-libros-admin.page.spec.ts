import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirLibrosAdminPage } from './anadir-libros-admin.page';

describe('AnadirLibrosAdminPage', () => {
  let component: AnadirLibrosAdminPage;
  let fixture: ComponentFixture<AnadirLibrosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirLibrosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
