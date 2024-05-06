import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  dummyCovers = [
    'https://www.rockingbookcovers.com/wp-content/uploads/2021/01/No-One-Close.jpg',
    'https://www.rockingbookcovers.com/wp-content/uploads/2022/09/Dont-Let-Me-In.jpg',
    'https://www.rockingbookcovers.com/wp-content/uploads/2023/03/Dont-Go-There.jpg',
    'https://www.rockingbookcovers.com/wp-content/uploads/2024/01/When-I-Find-You.jpg',
    'https://www.rockingbookcovers.com/wp-content/uploads/2023/02/You-Shouldnt-Have.jpg',
  ]

  getDummyBooks(bookCount = 5): Book[] {
    return Array.from({ length: bookCount }, (_, index) => ({
      title: `Book ${index + 1}`,
      cover: this.dummyCovers[ Math.floor(Math.random() * this.dummyCovers.length)]
    }))
  }
}
