import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookContainersComponent } from './containers/book-containers/book-containers.component';

const routes: Routes = [
  {
    path: '', component: BookContainersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookShopRoutingModule { }
