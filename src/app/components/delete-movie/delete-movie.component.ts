import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
    @Input() movie: Pelicula
    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
    }
    public borrar(): void {
        if(this.movie){
            this.movieService.delete(this.movie);
        }
    }
}
