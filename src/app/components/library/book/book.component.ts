import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../interfaces/book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  book: Book | null = null;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.book = this.booksService.getDummyBookBySlag(id);
    }
  }
}
