import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActuService } from '../actu.service';
import { Actu } from '../Actu';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  profileForm = this.fb.group({
    titre: ['', [Validators.required, Validators.minLength(1)]],
    contenu: ['', [Validators.required, Validators.minLength(1)]]
  });

  constructor(private fb: FormBuilder, private serviceActu: ActuService) {

  }

  onSubmit() {

    let actu: Actu;
    actu.Titre = this.profileForm.get('titre').value;
    actu.Contenu = this.profileForm.get('contenu').value;

    this.serviceActu.addActu(actu);

  }
}
