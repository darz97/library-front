import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { ListBookComponent } from './components/list-book/list-book.component';
import { BookModalComponent } from './components/book-modal/book-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { CommonModule } from '@angular/common';
import { BookPipePipe } from './pipes/book-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookFormComponent,
    ListBookComponent,
    BookModalComponent,
    DeleteModalComponent,
    BookPipePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
