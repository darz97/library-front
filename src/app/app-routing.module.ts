import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ListBookComponent } from './components/list-book/list-book.component';
import { BookModalComponent } from './components/book-modal/book-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

const routes: Routes = [
  {path: 'delete-modal', component: DeleteModalComponent},
  {path: 'book-modal', component: BookModalComponent},
  {path: 'list-book', component: ListBookComponent},
  {path: 'book-form', component: BookFormComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
