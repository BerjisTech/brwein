import { Component } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private booksService: BooksService) {}
  dummyBooks(bookCount: number): Book[] {
    return this.booksService.getDummyBooks(bookCount);
  }
}
