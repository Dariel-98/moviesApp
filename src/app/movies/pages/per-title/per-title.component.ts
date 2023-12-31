import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Search } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-per-title',
  templateUrl: './per-title.component.html',
  styles: [],
})
export class PerTitleComponent implements OnInit {
  // Declaring variables
  term: string = '';
  isError: boolean = false;
  movies: Search[] = [];
  pageNumber: number = 1; // Page number (from 1 to 100)
  totalResults: number = 0; // Results per search
  type: string = ''; // Type of search
  randomSearch: string[] = [
    'lord',
    'shrek',
    'red',
    'barbie',
    'fire',
    'wind',
    'shark',
    'water',
    'kill',
    'dragon',
  ]; // Random elements to search when starting page
  randomIndex: number = Math.floor(Math.random() * this.randomSearch.length);

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.search(this.randomSearch[this.randomIndex]);
  }
  // Method to search movies by title
  search(term: string) {
    this.term = term;
    this.isError = false;

    this.movieService
      .findTitle(this.term, this.pageNumber, this.type)
      .subscribe((resp) => {
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

  // Pagination methods
  nextPage() {
    if (
      this.pageNumber >= this.totalResults - 10 ||
      this.pageNumber * 10 > this.totalResults
    ) {
      return;
    } else {
      this.pageNumber++;
      this.movieService
        .findTitle(this.term, this.pageNumber, this.type)
        .subscribe((resp) => {
          this.movies = resp.Search;
        });
    }
  }
  previousPage() {
    if (this.pageNumber == 1) {
      return;
    } else {
      this.pageNumber--;
      this.movieService
        .findTitle(this.term, this.pageNumber, this.type)
        .subscribe((resp) => {
          this.movies = resp.Search;
        });
    }
  }

  // Method that stores the 'type' filter
  perType(type: string) {
    this.type = type;
  }
}
