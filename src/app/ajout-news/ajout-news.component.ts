import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActuService } from '../actu.service';
import { Actu } from '../Actu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout-news',
  templateUrl: './ajout-news.component.html',
  styleUrls: ['./ajout-news.component.scss']
})

export class AjoutNewsComponent implements OnInit {

  actuForm = this.fb.group({
    titre: ['', [Validators.required, Validators.minLength(1)]],
    contenu: ['', [Validators.required, Validators.minLength(1)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private serviceActu: ActuService) {

  }

  ngOnInit() {

  }

  onSubmit() {

    const Titre: string = this.actuForm.get('titre').value;
    const Contenu: string = this.actuForm.get('contenu').value;

    const actu: Actu = { Titre, Contenu };

    this.serviceActu.addActu(actu);

    alert("L'actualité a bien été ajoutée");

    this.router.navigate(["./actualites"]);

  }
}
