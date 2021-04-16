import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {
    @Output() eventCreateMovie: EventEmitter<any> = new EventEmitter<any>();
    public peliculaNueva: Pelicula;

    public saveMovie(): void {
        this.eventCreateMovie.emit(this.peliculaNueva);
    }
    
    public createNewMovie(): void {
        this.peliculaNueva = null;
        this.peliculaNueva = new Pelicula();
    }
}
