import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pelicula } from '../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    public dbpath: string = "/movies";
    protected menssagesRef: AngularFirestoreCollection<Pelicula>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }

    public getAll(): AngularFirestoreCollection<Pelicula> {
        return this.menssagesRef;
    }

    public create(movie: Pelicula) {
        return this.menssagesRef.doc(movie.id.toString()).set(({...movie}));
    }

    public create2(movie: Pelicula) {
        return this.menssagesRef.add({...movie});
    }
    
    public delete(movie: Pelicula) {
        movie.deleted = true;
        return this.menssagesRef.doc(movie.id.toString()).update(movie);
    }
}
