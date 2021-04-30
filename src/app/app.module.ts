import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';
import { MenuComponent } from './components/core/menu/menu.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorsComponent } from './components/actors/actors.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioPaisesService } from './services/servicio-paises.service';
import { firebaseConfig } from 'src/firebase-config';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaPeliculaComponent,
    MenuComponent,
    TablaPeliculaComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    ActorsComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicioPaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
