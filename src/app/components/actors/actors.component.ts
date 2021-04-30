import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
    public fg: FormGroup;
    public pais: string;
    public nombre: string;
    public apellido: string;
    public nombreArtistico: string;
    public edad: number;
    public email: string;
    constructor(private fb: FormBuilder) { }

    public ngOnInit(): void {
        this.fg =  this.fb.group({
            'nombre': ['', [Validators.required]],
            'apellido': ['', Validators.required],
            'direccion': ['', Validators.required],
            'edad': ['', [Validators.required, Validators.min(18)]],
            'pais': ['', Validators.required],
            'email': ['', [Validators.required, Validators.email]],
            'nombreArtistico': ['']
        });
    }
    public seleccionarPais(event) {
        this.pais = event;
        console.log(event)
    }
}
