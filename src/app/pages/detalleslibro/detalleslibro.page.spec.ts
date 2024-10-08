import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleslibroPage } from './detalleslibro.page';

describe('DetalleslibroPage', () => {
  let component: DetalleslibroPage;
  let fixture: ComponentFixture<DetalleslibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleslibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
