import { Component } from '@angular/core';
import { Search } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-per-type',
  templateUrl: './per-type.component.html',
  styles: [],
})
export class PerTypeComponent {
  // Declaring variables
  term: string = '';
  isError: boolean = false;
  movies: Search[] = [];
  pageNumber: number = 1; // Page number (from 1 to 100)
  totalResults: number = 0; // Results per search
  type: string = '';

  constructor(private movieService: MovieService) {}

  // Method to search movies by title
  search(term: string) {
    this.term = term;
    this.isError = false;

    this.movieService.findTitle(this.term, 1, this.type).subscribe((resp) => {
      if (resp.Response === 'True') {
        this.movies = resp.Search;
        this.totalResults = Number(resp.totalResults);
      } else {
        this.isError = true;
      }
    });
  }
  // Method to retrieve message error
  suggestions(term: string) {
    this.isError = false;
  }

  // Method that stores the 'type' filter
  perType(type: string) {
    this.type = type;
  }
}
