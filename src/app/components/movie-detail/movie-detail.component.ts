import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
    @Input() movieToShow: Pelicula;
    constructor() {
        // this.movieToShow = new Pelicula();
        // this.movieToShow.name = "lala";
     }
}
