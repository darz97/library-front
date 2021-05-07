import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookServiceService } from '../../service/book-service.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() book: Book = new Book();
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  deleteBook() {
    this.bookService.deleteByIsbn(this.book.isbn).subscribe(response => {

      location.reload();
    });

  }

}
