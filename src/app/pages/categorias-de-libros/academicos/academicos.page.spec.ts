import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcademicosPage } from './academicos.page';

describe('AcademicosPage', () => {
  let component: AcademicosPage;
  let fixture: ComponentFixture<AcademicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
