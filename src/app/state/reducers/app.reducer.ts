import { createReducer } from "@ngrx/store";
import { AppState } from "src/app/models/app.model";

export const InitialAppState: AppState = null;
export const AppReducer = createReducer(
    InitialAppState,
)