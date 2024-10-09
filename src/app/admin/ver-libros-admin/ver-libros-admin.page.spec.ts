import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerLibrosAdminPage } from './ver-libros-admin.page';

describe('VerLibrosAdminPage', () => {
  let component: VerLibrosAdminPage;
  let fixture: ComponentFixture<VerLibrosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerLibrosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
