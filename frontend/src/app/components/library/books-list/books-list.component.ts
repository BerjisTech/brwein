import { Component, Input } from '@angular/core';
import { Book } from '../../../interfaces/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent {
  // Array of books
  @Input() books : Book[] = [];

  @Input() pageTitle: string = 'Book Recomendations';
}
