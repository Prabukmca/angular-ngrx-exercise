import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/book.model";

export const loadBooks = createAction(
    '[Book List/API] Load All Books'
)

export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{ books: Book[] }>()
);

export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId: any }>()
);

export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{ bookId: any }>()
);