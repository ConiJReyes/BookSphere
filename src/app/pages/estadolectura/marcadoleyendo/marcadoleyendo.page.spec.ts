import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcadoleyendoPage } from './marcadoleyendo.page';

describe('MarcadoleyendoPage', () => {
  let component: MarcadoleyendoPage;
  let fixture: ComponentFixture<MarcadoleyendoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcadoleyendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
