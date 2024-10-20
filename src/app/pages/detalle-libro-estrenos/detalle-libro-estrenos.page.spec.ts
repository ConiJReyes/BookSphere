import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleLibroEstrenosPage } from './detalle-libro-estrenos.page';

describe('DetalleLibroEstrenosPage', () => {
  let component: DetalleLibroEstrenosPage;
  let fixture: ComponentFixture<DetalleLibroEstrenosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLibroEstrenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
