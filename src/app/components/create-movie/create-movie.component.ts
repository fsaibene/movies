import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit{
    @Output() eventCreateMovie: EventEmitter<any> = new EventEmitter<any>();
    public creandoPelicula: boolean = false;
    public fg: FormGroup;
    public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public needValidate$: Observable<boolean> = this.needValidate.asObservable();
    constructor(private fb: FormBuilder){

    }

    ngOnInit(): void {
        this.fg =  this.fb.group({
            'id': ['', [Validators.required]],
            'name': ['', [Validators.required, Validators.maxLength(100)]],
            'tipo': ['', [Validators.required, Validators.maxLength(100)]],
            'fechaEstreno': ['', [Validators.required, Validators.maxLength(12)]],
            'cantidadDePublico': ['', [Validators.required, Validators.max(10099)]],
            'fotoDePelicula': [''],
        });   
     }

    public saveMovie(pelicula): void {
        this.eventCreateMovie.emit(pelicula);
    }
    public onSubmit(form): void {
        this.needValidate.next(true);
        if(form.valid) {
            let pelicula = new Pelicula();
            pelicula.id = this.fg.controls["id"].value;
            pelicula.name = this.fg.controls["name"].value;
            pelicula.tipo = this.fg.controls["tipo"].value;
            pelicula.fechaEstreno = this.fg.controls["fechaEstreno"].value;
            pelicula.cantidadDePublico = this.fg.controls["cantidadDePublico"].value;
            pelicula.fotoDePelicula = this.fg.controls["fotoDePelicula"].value;
            this.saveMovie(pelicula);
            this.creandoPelicula = false;
        }
    }
    
    public createNewMovie(): void {
        this.creandoPelicula = true;
    }
}
