import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, timer } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { BookService } from "../services/book.service";
import { loadBooks, retrievedBookList } from "./book.actions";

@Injectable({ providedIn: 'root' })
export class BookEffects {

    constructor(
        private actions$: Actions,
        private service: BookService) {

    }
    // loadBooks$ = createEffect(() => this.actions$.pipe(map(
    //     ofType(loadBooks), mergeMap(() => this.service.getBooks()
    //         .pipe(map(books => ({
    //             type: '[Book List/API] Retrieve Books Success', payload: books
    //         })), catchError(() => EMPTY)))
    // )))

    loadBook$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBooks),
            switchMap(() =>
                this.service.getBooks()
                    .pipe(map(books => retrievedBookList({ books })))
            )
        )
    );


    // refresh$ = createEffect(() => {
    //     // every 10 minutes
    //     return timer(0, 600000).pipe(
    //       switchMap(() =>
    //         this.service.get().pipe(
    //           map((data) => refreshSuccess(data)),
    //           catchError((response) => refreshFailed(response)),
    //         ),
    //       ),
    //     )
    //   })

    //     refresh$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(CustomerActions.refresh),
    //     exhaustMap(({ customerIds }) =>
    //       merge(
    //         ...ids.map((id) =>
    //           this.customersService.getCustomer(id).pipe(
    //             map(CustomerActions.getCustomerSuccess),
    //             catchError((err) =>
    //               of(CustomerActions.getCustomerFailed(id, err.message)),
    //             ),
    //           ),
    //         ),
    //       ),
    //     ),
    //   ),
    // )

}