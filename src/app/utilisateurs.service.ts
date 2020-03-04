import { Injectable } from '@angular/core';
import { User } from './User';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private afs: AngularFirestore) {

  }

  public getUsers(): Observable<User[]> {
    return this.afs.collection<User>('Utilisateur').valueChanges();
  }
}
