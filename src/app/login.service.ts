import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private afAuth: AngularFireAuth) {

  }


  logout() {
    this.afAuth.auth.signOut();
  }

  tentativeConnexion(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }


}
