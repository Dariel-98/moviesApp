import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // Declaring variables
  private apiUrl: string = 'http://www.omdbapi.com';

  constructor(private http: HttpClient) {}

  // Making the Http reques
  findTitle(term: string): Observable<any> {
    const url = `${this.apiUrl}/?apikey=${environment.apiKey}&s=${term}`;
    return this.http.get(url);
  }
}