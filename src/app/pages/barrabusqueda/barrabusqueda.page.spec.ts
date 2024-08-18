import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarrabusquedaPage } from './barrabusqueda.page';

describe('BarrabusquedaPage', () => {
  let component: BarrabusquedaPage;
  let fixture: ComponentFixture<BarrabusquedaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrabusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
