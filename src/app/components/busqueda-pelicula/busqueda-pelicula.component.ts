import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/classes/pelicula';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {
    public selectedMovie: Pelicula;
    public movies$: Observable<Pelicula[]>;

    constructor(private movieService: MovieService) { 
        // this.movieList = [
        //     {id: 0, name: "Peli Comedia", tipo: "Comedia", fechaEstreno: "10/10/2010", cantidadDePublico: "111", fotoDePelicula: "https://www.themoviedb.org/t/p/w220_and_h330_face/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"},
        //     {id: 1, name: "Peli amor", tipo: "Amor", fechaEstreno: "10/10/2014", cantidadDePublico: "332", fotoDePelicula: "https://www.themoviedb.org/t/p/w220_and_h330_face/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"},
        //     {id: 2, name: "Peli Terror", tipo: "Terror", fechaEstreno: "10/10/2015", cantidadDePublico: "255", fotoDePelicula: "https://www.themoviedb.org/t/p/w220_and_h330_face/6KErczPBROQty7QoIsaa6wJYXZi.jpg"},
        // ]
    }

    public ngOnInit(): void {
        this.movies$ = this.movieService.getAll().valueChanges()
        .pipe(map(values => values.filter(p => !p.deleted)));
        let asd = this.movieService.getAll().doc();
        console.log(asd)
        this.movies$.subscribe(v => console.log(v));
    }
    
    public creacionPelicula(movie: Pelicula) {
        this.movieService.create(movie);
    }

    public loadSelectedMovie(movie: Pelicula){
        this.selectedMovie = movie;
    }
}
