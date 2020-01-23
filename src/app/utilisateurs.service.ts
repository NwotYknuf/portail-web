import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  users: User[];
  user: User;

  constructor() { }

  public getUsers(): User[] {
    this.user = new User();
    this.user.nom = 'Depardieu';
    this.user.prenom = 'Gerard';
    this.user.urlImage = 'http://fr.web.img4.acsta.net/pictures/15/07/27/15/04/271855.jpg';

    this.users = [
      this.user,
      this.user,
      this.user
    ];

    return this.users;
  }
}
