import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiccionPage } from './ficcion.page';

describe('FiccionPage', () => {
  let component: FiccionPage;
  let fixture: ComponentFixture<FiccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FiccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
