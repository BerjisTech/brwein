import { Component } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent {
  // Array of books
  books = [
    {
      title: 'The Alchemist',
    },
    {
      title: 'The Little Prince',
    },
    {
      title: 'The Da Vinci Code',
    },
    {
      title: 'The Hobbit',
    },
    {
      title: 'The Catcher in the Rye',
    },
    {
      title: 'The Great Gatsby',
    },
    {
      title: 'The Lion, the Witch and the Wardrobe',
    },
    {
      title: 'The Lord of the Rings',
    },
    {
      title: 'The Chronicles of Narnia',
    },
    {
      title: 'The Hitchhiker\'s Guide to the Galaxy',
    },
  ]
}
