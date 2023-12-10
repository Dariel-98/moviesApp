import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from './components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { PerIdComponent } from './pages/per-id/per-id.component';
import { PerTitleComponent } from './pages/per-title/per-title.component';
import { RouterModule } from '@angular/router';
import { SeeMovieComponent } from './pages/see-movie/see-movie.component';

@NgModule({
  declarations: [
    PerTitleComponent,
    PerIdComponent,
    InputComponent,
    CardsComponent,
    MovieComponent,
    SeeMovieComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, FormsModule, RouterModule],
})
export class MoviesModule {}
