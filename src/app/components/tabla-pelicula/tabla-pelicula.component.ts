import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
    @Input() movies$: Observable<Pelicula[]>;
    @Output() selectedMovieEvent: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }
    
    public movieSelected(movie: Pelicula): void {
        console.info("Pelicula: " + movie.name)
        this.selectedMovieEvent.emit(movie);
    }
}
