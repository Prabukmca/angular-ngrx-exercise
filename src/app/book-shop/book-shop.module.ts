import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookShopRoutingModule } from './book-shop-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionsComponent } from './components/book-collections/book-collections.component';
import { BookContainersComponent } from './containers/book-containers/book-containers.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './book-state/book.reducer';
import { collectionReducer } from './book-state/collection.reducer';



@NgModule({
  declarations: [
    BookListComponent,
    BookCollectionsComponent,
    BookContainersComponent
  ],
  imports: [
    CommonModule,
    BookShopRoutingModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer })
  ]
})
export class BookShopModule { }
