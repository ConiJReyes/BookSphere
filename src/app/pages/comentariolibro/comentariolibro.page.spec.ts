import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComentariolibroPage } from './comentariolibro.page';

describe('ComentariolibroPage', () => {
  let component: ComentariolibroPage;
  let fixture: ComponentFixture<ComentariolibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariolibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
