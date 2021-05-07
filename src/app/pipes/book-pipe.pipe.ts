import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'bookPipe'
})
export class BookPipePipe implements PipeTransform {

  transform(books: any[], text: string, colum: any): any[] {
    if (text === '') {
      return books;
    }
    text = text.toLowerCase();
    return books.filter(item => {
      return item[colum].toLowerCase().includes(text);
    });
  }

}
