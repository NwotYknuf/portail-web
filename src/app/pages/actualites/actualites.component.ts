import { Component, OnInit } from '@angular/core';
import { ActuService } from 'src/app/actu.service';
import { Actu } from 'src/app/Actu';
@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {

  public actus: Actu[];

  constructor(private actuService: ActuService) { }

  ngOnInit() {
    this.actuService.getActu().subscribe(actus => this.actus = actus);
  }

}
