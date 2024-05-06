import { Component, Input } from '@angular/core';
import { Book } from '../../../interfaces/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent {
  // Array of books
  @Input() books : Book[] = [
    {
      title: 'The Great Gatsby',
      cover: 'https://www.rockingbookcovers.com/wp-content/uploads/2021/01/No-One-Close.jpg'
    },
    {
      title: 'The Catcher in the Rye',
      cover: 'https://www.rockingbookcovers.com/wp-content/uploads/2022/09/Dont-Let-Me-In.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      cover: 'https://www.rockingbookcovers.com/wp-content/uploads/2023/03/Dont-Go-There.jpg'
    },
    {
      title: '1984',
      cover: 'https://www.rockingbookcovers.com/wp-content/uploads/2024/01/When-I-Find-You.jpg'
    },
    {
      title: 'Animal Farm',
      cover: 'https://www.rockingbookcovers.com/wp-content/uploads/2023/02/You-Shouldnt-Have.jpg'
    },
  ];

  @Input() pageTitle: string = 'Book Recomendations';
}
