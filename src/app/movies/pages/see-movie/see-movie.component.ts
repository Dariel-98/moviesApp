import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieID } from '../../interfaces/byID.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-see-movie',
  templateUrl: './see-movie.component.html',
  styles: [],
})
export class SeeMovieComponent implements OnInit {
  movie!: MovieID;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ ID }) => this.movieService.findId(ID)),
        tap(console.log)
      )
      .subscribe((movie) => (this.movie = movie));
  }
}
