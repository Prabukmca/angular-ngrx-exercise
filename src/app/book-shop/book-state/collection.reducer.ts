import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./book.actions";

export const initialCollectionState: any[] = [];
export const collectionReducer = createReducer(
    initialCollectionState,
    on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
    on(addBook, (state, { bookId }) => {
        const strBookId = state.indexOf(bookId);
        if (strBookId > -1) {
            return state;
        }
        return [...state, bookId];
    })
)