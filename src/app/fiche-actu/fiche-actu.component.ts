import { Component, OnInit, Input } from '@angular/core';
import { Actu } from '../Actu';

@Component({
  selector: 'app-fiche-actu',
  templateUrl: './fiche-actu.component.html',
  styleUrls: ['./fiche-actu.component.scss']
})

export class FicheActuComponent implements OnInit {

  @Input()
  public actu: Actu;

  constructor() { }

  ngOnInit() {
  }

}
