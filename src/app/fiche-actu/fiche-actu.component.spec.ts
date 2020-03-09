import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheActuComponent } from './fiche-actu.component';

describe('FicheActuComponent', () => {
  let component: FicheActuComponent;
  let fixture: ComponentFixture<FicheActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
