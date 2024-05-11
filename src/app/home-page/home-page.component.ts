import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BookData } from '../models/book-data.const';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { BookModel } from '../models/book-model.interface';
import { Categories } from '../models/categories.const';
import { StarComponent } from '../star/star.component';
import { BookCellComponent } from "../book-cell/book-cell.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [MatButtonModule, MatIconModule, MatBadgeModule, StarComponent, BookCellComponent, HeaderComponent, FooterComponent]
})
export class HomePageComponent {
  bookData = BookData;
  fiteredData: BookModel[] = BookData;
  basketList: BookModel[] = []

  company: string = "Btk Akademi"
  currentDate: Date = new Date();

  filterCategory(category: string) {
    if (category === "all") {
      this.fiteredData = this.bookData;
    } else {
      this.fiteredData = this.bookData.filter(data => data.category === category);
      console.log(this.bookData);
      console.log(this.fiteredData);
    }
  }

  addBasket(book: BookModel) {
    const index = this.basketList.findIndex(data => data.name === book.name)
    if (index < 0) this.basketList.push(book)
  }

}
