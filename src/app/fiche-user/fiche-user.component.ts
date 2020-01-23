import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
import { UtilisateursService } from '../utilisateurs.service';

@Component({
  selector: 'app-fiche-user',
  templateUrl: './fiche-user.component.html',
  styleUrls: ['./fiche-user.component.scss']
})
export class FicheUserComponent implements OnInit {

  @Input()
  public user: User;

  constructor() { }

  ngOnInit() {
  }

}
