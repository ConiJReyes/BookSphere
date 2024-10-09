import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosLosLibrosPage } from './todos-los-libros.page';

describe('TodosLosLibrosPage', () => {
  let component: TodosLosLibrosPage;
  let fixture: ComponentFixture<TodosLosLibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLosLibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
