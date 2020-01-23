import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'src/app/utilisateurs.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-trombi',
  templateUrl: './trombi.component.html',
  styleUrls: ['./trombi.component.scss']
})
export class TrombiComponent implements OnInit {

  public users: User[];

  constructor(private userService: UtilisateursService) {

  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
