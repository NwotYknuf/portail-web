import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trombi',
  templateUrl: './trombi.component.html',
  styleUrls: ['./trombi.component.scss']
})
export class TrombiComponent implements OnInit {

  public name = 'Gerard';
  public surname = 'Depardieu';
  public imgSrc = 'http://fr.web.img4.acsta.net/pictures/15/07/27/15/04/271855.jpg';

  constructor() { }

  ngOnInit() {

  }

}
