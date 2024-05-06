import { Component } from '@angular/core';
import { Book } from '../../../interfaces/book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  constructor(private booksService: BooksService) { }
  dummyBooks(bookCount: number): Book[] {
    return this.booksService.getDummyBooks(bookCount);
  }
}
