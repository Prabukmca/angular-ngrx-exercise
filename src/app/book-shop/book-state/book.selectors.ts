import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import { AppState } from "src/app/state/app.state";

export const selectBooks = createSelector(
  (state: AppState) => {
    console.log('In SElectBooks selector', state, state.books);
    return state.books ||[];
  },
  (books: Book[]) => {
    console.log('In second part selector', books);
    return books || [];
  }
);

export const selectCollectionState = createFeatureSelector<AppState, any[]>("collection");

export const selectBookCollection = createSelector(selectBooks, selectCollectionState,
  (books: Book[], collection: any[]) => {
    console.log('In collection selector', books, collection);
    return collection.map((id) => books.find((book) => book.id === id));
  }
)