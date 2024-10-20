import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrosGuardadosDetallesPage } from './libros-guardados-detalles.page';

describe('LibrosGuardadosDetallesPage', () => {
  let component: LibrosGuardadosDetallesPage;
  let fixture: ComponentFixture<LibrosGuardadosDetallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosGuardadosDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
