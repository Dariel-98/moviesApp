import { Component, Input } from '@angular/core';
import { MovieID } from '../../interfaces/byID.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [],
})
export class MovieComponent {
  // Making imports from parent component
  @Input() movie: MovieID = {};
  @Input() isEmpty: boolean = true;
}
