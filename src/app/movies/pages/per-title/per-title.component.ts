import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-per-title',
  templateUrl: './per-title.component.html',
  styles: [],
})
export class PerTitleComponent {
  // Declaring variables
  term: string = '';
  isError: boolean = false;

  constructor(private movieService: MovieService) {}

  // Method to search movies
  search() {
    console.log(this.term);
    this.isError = false;

    this.movieService.findTitle(this.term).subscribe((resp) => {
      console.log(resp);
      if (resp.Response === 'True') {
        console.log(resp);
      } else {
        this.isError = true;
      }
    });
  }
}
