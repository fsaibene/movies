import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
    { path: 'busqueda', component: BusquedaPeliculaComponent},
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'busqueda' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
