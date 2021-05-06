import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from 'src/app/components/create-movie/create-movie.component';

const routes: Routes = [
    { path: 'alta', component: CreateMovieComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
