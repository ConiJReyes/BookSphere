import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionComentarioLibroPage } from './gestion-comentario-libro.page';

describe('GestionComentarioLibroPage', () => {
  let component: GestionComentarioLibroPage;
  let fixture: ComponentFixture<GestionComentarioLibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionComentarioLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
