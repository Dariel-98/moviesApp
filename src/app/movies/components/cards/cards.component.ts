import { Component, Input } from '@angular/core';

import { Search } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [],
})
export class CardsComponent {
  // Declaring variables
  p: number = 1;

  @Input() movies: Search[] = [];
}
