import { Component, EventEmitter, Input } from '@angular/core';
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
  isEmpty: boolean = true;

  // Emitting variable to check if the search is empty or not

  constructor(private movieService: MovieService) {}

  // Method to search movies by ID
  search(term: string) {
    this.term = term;
    this.isError = false;
    this.isEmpty = true;

    this.movieService.findId(this.term).subscribe((resp) => {
      if (resp.Response === 'True') {
        console.log(resp);
        this.movie = resp;
        this.isEmpty = false;
      } else if (resp.Response === 'False') {
        this.isError = true;
      }
    });
  }
  // Method to retrieve message error
  suggestions(term: string) {
    this.isError = false;
  }
}
