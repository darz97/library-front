import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookServiceService } from '../../service/book-service.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];
  booksByPublisher: Book[] = [];
  book: Book = new Book();
  textSearch = '';
  publisher = '';
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.listBooks();


  }

  private listBooks(): void {
    this.bookService.getAll().subscribe(response => {
      this.books = response.data;
      this.booksByPublisher = response.data;
      console.log(this.books);
    });
  }

  search(event: any): void {
    if (event.data !== null) {
      console.log(event);
      this.textSearch += event.data;
      console.log(this.textSearch);
    } else {
      this.textSearch = '';
    }
  }
  filterByPublisher(event: any): void {
    if (this.publisher === 'All books') {
      this.listBooks();
    } else {
      this.findByPublisher(this.publisher);
    }
  }


  deleteOrShowInfo(book: Book): void {
    this.book = book;
  }

  findByPublisher(publisher:string):void {
    this.bookService.getByPublisher(publisher).subscribe(response => {
      this.books = response.data;
    });
  }






}
