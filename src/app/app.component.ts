import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loginService: LoginService, public afAuth: AngularFireAuth) {

  }

  public isConnected(): boolean {
    return false;
  }

  title = 'projet-portail';
}

