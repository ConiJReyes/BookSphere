import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadaLibroPage } from './cada-libro.page';

describe('CadaLibroPage', () => {
  let component: CadaLibroPage;
  let fixture: ComponentFixture<CadaLibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadaLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
