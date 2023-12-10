import { Component, OnInit } from '@angular/core';

import { MovieID } from '../../interfaces/byID.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-per-id',
  templateUrl: './per-id.component.html',
  styles: [],
})
export class PerIdComponent implements OnInit {
  // Declaring variables
  term: string = '';
  isError: boolean = false;
  movie: MovieID = {};
  isEmpty: boolean = true;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.search('tt1285016');
  }
  // Method to search movies by ID
  search(term: string) {
    this.term = term;
    this.isError = false;
    this.isEmpty = true;

    this.movieService.findId(this.term).subscribe((resp) => {
      if (resp.Response === 'True') {
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
