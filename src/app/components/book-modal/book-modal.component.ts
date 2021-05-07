import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent implements OnInit {
  @Input() book: Book = new Book();
  constructor() { }

  ngOnInit(): void {
  }

}
