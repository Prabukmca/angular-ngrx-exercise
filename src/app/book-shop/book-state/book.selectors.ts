import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import { AppState } from "src/app/state/app.state";

export const selectBooks = createSelector(
  (state: AppState) => {
    console.log('In SElectBooks selector', state, state.books);
    return state.books || [];
  },
  (books: Book[]) => {
    console.log('In second part selector', books);
    return books || [];
  }
);

// export const selectCollection = createFeatureSelector<AppState, any[]>("collections");
export const selectCollection = (state: AppState) => state.collections;

export const selectBookCollection = createSelector(selectBooks, selectCollection,
  (books: Book[], collection: any[]) => {
    console.log('In collection selector books', books);
    console.log('In collection selector collection', collection);
    return collection?.map((id) => books.find((book) => book.id === id));
  }
)
