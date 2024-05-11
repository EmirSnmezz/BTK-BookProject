import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCellComponent } from './book-cell.component';

describe('BookCellComponent', () => {
  let component: BookCellComponent;
  let fixture: ComponentFixture<BookCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
