import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendacionesAdminPage } from './recomendaciones-admin.page';

describe('RecomendacionesAdminPage', () => {
  let component: RecomendacionesAdminPage;
  let fixture: ComponentFixture<RecomendacionesAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacionesAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
