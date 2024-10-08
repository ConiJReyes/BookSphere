import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPerfilUsuarioPage } from './modificar-perfil-usuario.page';

describe('ModificarPerfilUsuarioPage', () => {
  let component: ModificarPerfilUsuarioPage;
  let fixture: ComponentFixture<ModificarPerfilUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPerfilUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
