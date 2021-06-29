import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { addBook, removeBook, retrievedBookList } from '../../book-state/book.actions';
import { selectBookCollection, selectBooks } from '../../book-state/book.selectors';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-containers',
  templateUrl: './book-containers.component.html',
  styleUrls: ['./book-containers.component.scss']
})
export class BookContainersComponent implements OnInit {
  books$ = this.store.pipe(map(selectBooks));
  bookCollection$ = this.store.pipe(map(selectBookCollection));

  constructor(
    private bookService: BookService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.bookService
      .getBooks()
      .subscribe((Books) => {
        console.log('Books', Books);

        this.store.dispatch(retrievedBookList(
          {
            books: Books
          }
        ))
      });
  }

  onAdd(bookId: any) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }

}
