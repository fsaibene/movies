import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent {
    public movieList: Array<Pelicula> = new Array<Pelicula>();
    public selectedMovie: Pelicula;

    constructor() { 
        this.movieList = [
            {id: 0, name: "Peli Comedia", tipo: "comedia", fechaEstreno: "10/10/2010", cantidadDePublico: "111", fotoDePelicula: "https://www.themoviedb.org/t/p/w220_and_h330_face/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"},
            {id: 1, name: "Peli amor", tipo: "amough", fechaEstreno: "10/10/2014", cantidadDePublico: "332", fotoDePelicula: "https://www.themoviedb.org/t/p/w220_and_h330_face/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"},
            {id: 2, name: "Peli Terror", tipo: "error", fechaEstreno: "10/10/2015", cantidadDePublico: "255", fotoDePelicula: "https://www.themoviedb.org/t/p/w220_and_h330_face/6KErczPBROQty7QoIsaa6wJYXZi.jpg"},
        ]
    }
    
    public creacionPelicula(movie: Pelicula) {
        this.movieList.push(movie);
    }

    public loadSelectedMovie(movie: Pelicula){
        this.selectedMovie = movie;
    }
}
