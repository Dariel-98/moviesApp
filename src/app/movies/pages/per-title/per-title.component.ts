import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Search } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-per-title',
  templateUrl: './per-title.component.html',
  styles: [],
})
export class PerTitleComponent {
  // Declaring variables
  term: string = '';
  isError: boolean = false;
  movies: Search[] = [];

  constructor(private movieService: MovieService) {}

  // Method to search movies
  search(term: string) {
    this.term = term;
    this.isError = false;

    this.movieService.findTitle(this.term).subscribe((resp) => {
      console.log(resp);
      if (resp.Response === 'True') {
        console.log(resp.Search);
        this.movies = resp.Search;
      } else {
        this.isError = true;
      }
    });
  }
}
