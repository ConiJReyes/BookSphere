import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionUsuarioAdminPage } from './gestion-usuario-admin.page';

describe('GestionUsuarioAdminPage', () => {
  let component: GestionUsuarioAdminPage;
  let fixture: ComponentFixture<GestionUsuarioAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsuarioAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
