import { ActionReducerMap } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import { booksReducer } from "./book.reducer";
import { collectionReducer } from "./collection.reducer";

export interface BookState {
    books: Book[],
    collections: any[],
}
export const reducers: ActionReducerMap<BookState> = {
    books: booksReducer,
    collections: collectionReducer
};
