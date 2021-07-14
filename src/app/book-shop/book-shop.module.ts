import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookShopRoutingModule } from './book-shop-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionsComponent } from './components/book-collections/book-collections.component';
import { BookContainersComponent } from './containers/book-containers/book-containers.component';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book-state/book.effects';
import { reducers } from './book-state/book.state';



@NgModule({
  declarations: [
    BookListComponent,
    BookCollectionsComponent,
    BookContainersComponent
  ],
  imports: [
    CommonModule,
    BookShopRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects])

  ],
  providers: [Store]
})
export class BookShopModule { }
