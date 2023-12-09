import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Result } from '../interfaces/movie.interface';
import { MovieID } from '../interfaces/byID.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // Declaring variables
  private apiUrl: string = 'http://www.omdbapi.com';

  constructor(private http: HttpClient) {}

  // Making the Http reques
  findTitle(term: string, pageNumber?: number): Observable<Result> {
    const url = `${this.apiUrl}/?apikey=${environment.apiKey}&s=${term}&page=${pageNumber}`;
    return this.http.get<Result>(url);
  }

  findId(term: string): Observable<MovieID> {
    const url = `${this.apiUrl}/?apikey=${environment.apiKey}&i=${term}`;
    return this.http.get<MovieID>(url);
  }
}
