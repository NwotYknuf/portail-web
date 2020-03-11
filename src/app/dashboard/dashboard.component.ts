import { Component, OnInit } from '@angular/core';
import { Actu } from '../Actu';
import { User } from '../User';
import { UtilisateursService } from '../utilisateurs.service'
import { ActuService } from '../actu.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public actu: Actu;
  public user: User;

  constructor(private actuService: ActuService, private userService: UtilisateursService) {

  }

  ngOnInit() {
    let _users;
    let _actus;

    this.userService.getUsers().subscribe(users => {
      _users = users;
      this.user = _users[Math.floor(Math.random() * _users.length)];
    });

    this.actuService.getActu().subscribe(actus => {
      _actus = actus;
      this.actu = _actus[Math.floor(Math.random() * _users.length)];
    });

  }

}
