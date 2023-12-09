import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerTitleComponent } from './pages/per-title/per-title.component';
import { PerTypeComponent } from './pages/per-type/per-type.component';
import { PerIdComponent } from './pages/per-id/per-id.component';
import { SeeMovieComponent } from './pages/see-movie/see-movie.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'title',
        component: PerTitleComponent,
      },
      {
        path: 'type',
        component: PerTypeComponent,
      },
      {
        path: 'id',
        component: PerIdComponent,
      },
      {
        path: 'id/:ID',
        component: SeeMovieComponent,
      },
      {
        path: '**',
        redirectTo: 'title',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
