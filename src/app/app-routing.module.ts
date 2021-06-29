import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books-shop', pathMatch: 'full' },
  {

    path: 'books-shop', loadChildren: () => import('./book-shop/book-shop.module').then(m => m.BookShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
