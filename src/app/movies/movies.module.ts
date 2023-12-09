import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { PerTitleComponent } from './pages/per-title/per-title.component';
import { PerTypeComponent } from './pages/per-type/per-type.component';
import { PerIdComponent } from './pages/per-id/per-id.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [PerTitleComponent, PerTypeComponent, PerIdComponent, InputComponent, CardsComponent],
  imports: [CommonModule, MoviesRoutingModule, FormsModule],
})
export class MoviesModule {}
