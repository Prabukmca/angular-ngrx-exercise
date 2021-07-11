import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookEffects } from './book-shop/book-state/book.effects';
import { AppReducer } from './state/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({}),
    // EffectsModule.forRoot([])

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
