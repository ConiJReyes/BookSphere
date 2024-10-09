import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcadoleidoPage } from './marcadoleido.page';

describe('MarcadoleidoPage', () => {
  let component: MarcadoleidoPage;
  let fixture: ComponentFixture<MarcadoleidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcadoleidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
