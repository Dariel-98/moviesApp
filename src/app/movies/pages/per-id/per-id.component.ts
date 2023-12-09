import { Component } from '@angular/core';
import { Search } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';
import { MovieID } from '../../interfaces/byID.interface';

@Component({
  selector: 'app-per-id',
  templateUrl: './per-id.component.html',
  styles: [],
})
export class PerIdComponent {
  // Declaring variables
  term: string = '';
  isError: boolean = false;
  movie: MovieID = {};

  constructor(private movieService: MovieService) {}

  // Method to search movies by ID
  search(term: string) {
    this.term = term;
    this.isError = false;

    this.movieService.findId(this.term).subscribe((resp) => {
      if (resp.Response === 'True') {
        console.log(resp);
        this.movie = resp;
      } else if (resp.Response === 'False') {
        this.isError = true;
      }
    });
  }
}
