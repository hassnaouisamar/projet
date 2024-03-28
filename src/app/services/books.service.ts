import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  public getBooks(type: string, value: string) {
    // Construct the URL with the provided parameters
    const url = `http://localhost:3000/endpoints/get_books.php?type=${type}&value=${value}`;

    // Make the HTTP GET request
    return this.http.get<any>(url);
  }
  addBooking(idUser: number, idLivre: number,date:string) {
    const url = 'http://localhost:3000/endpoints/booking.php';
    const body = {
      "idUser": idUser,
      "idLivre": idLivre,
      "delais": date,
    };
    // Make the HTTP POST request with the provided body
    return this.http.post<any>(url, body);
  }
}
