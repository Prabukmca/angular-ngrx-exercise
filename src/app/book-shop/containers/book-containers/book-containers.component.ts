import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { addBook, loadBooks, removeBook } from '../../book-state/book.actions';
import { selectBookCollection, selectBooks } from '../../book-state/book.selectors';

@Component({
  selector: 'app-book-containers',
  templateUrl: './book-containers.component.html',
  styleUrls: ['./book-containers.component.scss']
})
export class BookContainersComponent implements OnInit {
  books$ = this.store.pipe(map(selectBooks));
  bookCollection$ = this.store.pipe(map(selectBookCollection));

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());   
  }

  onAdd(bookId: any) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }

}
