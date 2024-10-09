import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrosEstrenosPage } from './libros-estrenos.page';

describe('LibrosEstrenosPage', () => {
  let component: LibrosEstrenosPage;
  let fixture: ComponentFixture<LibrosEstrenosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosEstrenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
