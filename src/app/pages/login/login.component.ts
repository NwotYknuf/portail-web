import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public toast: boolean = true;

  profileForm = this.fb.group({
    mail: ['', [Validators.required, Validators.email]],
    mdp: ['', [Validators.required, Validators.minLength(2)]]
  });

  onSubmit() {
    console.log('Name: ', this.profileForm.value.mail);
    this.router.navigate(['/accueil']);
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

  }

}
