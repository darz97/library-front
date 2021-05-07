import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api-response';
import { Observable } from 'rxjs';
import { Constants } from '../model/constants';
import { Book } from '../model/book';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }
  HeaderText = new HttpHeaders({'Content-type': 'text/plain'});

  getByAuthor(author: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(Constants.API_BASE_URL + '/author/' + author, httpOptions);
  }
  getByPublisher(publisher: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(Constants.API_BASE_URL + '/publisher/' + publisher, httpOptions);
  }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(Constants.API_BASE_URL + '/all', httpOptions);
  }

  deleteByIsbn(isbn: number) {
    return this.http.delete<ApiResponse>(Constants.API_BASE_URL + '/delete/' + isbn, { headers: this.HeaderText });
  }

  insert(book: Book): Observable<ApiResponse> {
    return this.http.post<ApiResponse> (Constants.API_BASE_URL + '/new',
    book, httpOptions);
  }
}
