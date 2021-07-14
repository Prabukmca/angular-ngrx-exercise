import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./book.actions";

export const initialCollectionState: any[] = [];
export const collectionReducer = createReducer(
    initialCollectionState,
    on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
    on(addBook, (state, { bookId }) => {
        console.log('on Add book reducer state', state);
        console.log('on Add book reducer bookId', bookId);
        const strBookId = state.indexOf(bookId);
        console.log('on Add book reducer strBookId', strBookId);

        if (strBookId > -1) {
            return state;
        }
        return [...state, bookId];
    })
)