import { Book } from "../models/book.model";

export interface AppState {
    books: Book[];
    collections: Array<any>;
  }