import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMovieComponent } from 'src/app/components/create-movie/create-movie.component';
import { MovieService } from 'src/app/services/movie.service';



@NgModule({
  declarations: [CreateMovieComponent],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService]
})
export class PeliculasModule { }
