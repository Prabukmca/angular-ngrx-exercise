import { createReducer, on } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import { retrievedBookList } from "./book.actions";

export const initialBookState: Book[] = [];

export const booksReducer = createReducer(
    initialBookState,
    on(retrievedBookList, (state, { books }) => {
        console.log('in reducer', books);
        return [...books]
    })
);