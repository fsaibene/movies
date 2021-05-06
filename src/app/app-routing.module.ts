import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './components/actors/actors.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
    { path: 'busqueda', component: BusquedaPeliculaComponent},
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'cargaactores', component: ActorsComponent },{
        path: 'peliculas',
        loadChildren: () => import('./modules/peliculas/peliculas.module').then(m => m.PeliculasModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'busqueda' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
