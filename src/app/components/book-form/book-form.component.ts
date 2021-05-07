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
    this.bookService.insert(this.book).subscribe(response => {
      location.reload();
    });

  }

}
