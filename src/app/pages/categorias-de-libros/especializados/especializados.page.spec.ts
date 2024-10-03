import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecializadosPage } from './especializados.page';

describe('EspecializadosPage', () => {
  let component: EspecializadosPage;
  let fixture: ComponentFixture<EspecializadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
