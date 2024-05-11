import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../models/book-model.interface';
import { StarComponent } from '../star/star.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-book-cell',
    standalone: true,
    templateUrl: './book-cell.component.html',
    styleUrl: './book-cell.component.scss',
    imports: [StarComponent,MatButtonModule]
})
export class BookCellComponent {
  @Input() book: BookModel = {};
  @Output() addBasketEvent = new EventEmitter<BookModel>();

  addBasket(book: BookModel) {
    this.addBasketEvent.emit(book);
  }
}
