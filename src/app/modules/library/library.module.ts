import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LibraryRoutingModule } from './library-routing.module';
import { MainComponent } from '../../components/library/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { BooksListComponent } from '../../components/library/books-list/books-list.component';
import { BookCardComponent } from '../../components/library/book-card/book-card.component';
import { LibraryNavComponent } from '../../components/library/library-nav/library-nav.component';
import { BooksSearchComponent } from '../../components/library/books-search/books-search.component';


@NgModule({
  declarations: [
    MainComponent,
    BooksListComponent,
    BookCardComponent,
    LibraryNavComponent,
    BooksSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }
