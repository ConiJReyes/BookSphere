import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoFiccionPage } from './no-ficcion.page';

describe('NoFiccionPage', () => {
  let component: NoFiccionPage;
  let fixture: ComponentFixture<NoFiccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFiccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
