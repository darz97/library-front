import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookServiceService } from '../../service/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: Book = new Book();
  constructor(private bookService:BookServiceService) { }

  ngOnInit(): void {
  }

  insert(): void {
    if (this.formValid()) {
      this.bookService.insert(this.book).subscribe(response => {
        this.clearData();
        alert(response.message[0]);
      }, (err) => {
        alert(err.error.message[0]);
        this.clearData();
      }
      );
    }
  }

  formValid(){
    if (!this.book.name) {
      alert('Enter the name please');
      return false;
    }
    if (!this.book.author) {
      alert('Enter the author please');
      return false;
    }
    if (!this.book.publisher) {
      alert('Enter the publisher please');
      return false;
    }
    if (!this.book.genre) {
      alert('Enter the genre please');
      return false;
    }
    return true;
  }

  clearData() {
    this.book.name = '';
    this.book.author = '';
    this.book.genre = '';
    this.book.publisher = '';
  }

}
