import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../../components/library/main/main.component';
import { BookComponent } from '../../components/library/book/book.component';
import { BooksComponent } from '../../components/library/books/books.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'book/:id',
        component: BookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
