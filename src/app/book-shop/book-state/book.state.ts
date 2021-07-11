import { ActionReducerMap } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import { AppState } from "src/app/state/app.state";
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
export interface State extends AppState {
    examples: BookState;
  }