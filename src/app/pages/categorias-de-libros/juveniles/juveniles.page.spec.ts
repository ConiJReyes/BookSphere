import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuvenilesPage } from './juveniles.page';

describe('JuvenilesPage', () => {
  let component: JuvenilesPage;
  let fixture: ComponentFixture<JuvenilesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuvenilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
