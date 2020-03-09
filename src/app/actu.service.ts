import { Injectable } from '@angular/core';
import { Actu } from './Actu';
import { AngularFirestore, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActuService {

  constructor(private afs: AngularFirestore) {

  }

  public getActu(): Observable<Actu[]> {
    return this.afs.collection<Actu>('Actualites').valueChanges();
  }

  public addActu(actu: Actu) {
    this.afs.collection<Actu>('Actualites').add(actu);
  }

}
