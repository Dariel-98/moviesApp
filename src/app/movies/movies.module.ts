import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { PerTitleComponent } from './pages/per-title/per-title.component';
import { PerTypeComponent } from './pages/per-type/per-type.component';
import { PerIdComponent } from './pages/per-id/per-id.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PerTitleComponent, PerTypeComponent, PerIdComponent],
  imports: [CommonModule, MoviesRoutingModule, FormsModule],
})
export class MoviesModule {}
