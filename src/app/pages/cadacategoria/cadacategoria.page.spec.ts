import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadacategoriaPage } from './cadacategoria.page';

describe('CadacategoriaPage', () => {
  let component: CadacategoriaPage;
  let fixture: ComponentFixture<CadacategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadacategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
