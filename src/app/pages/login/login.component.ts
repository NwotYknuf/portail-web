import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    mail: ['', [Validators.required, Validators.email]],
    mdp: ['', [Validators.required, Validators.minLength(2)]]
  });


  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }


  onSubmit() {

    this.loginService.tentativeConnexion(this.profileForm.get('mail').value, this.profileForm.get('mdp').value).then(
      (user) => {
        console.log(user.user.email);
      }
    ).catch(
      (erreur) => {
        console.log(erreur);
      }
    );
  }

  ngOnInit() {

  }

}
