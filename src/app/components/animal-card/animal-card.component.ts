import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Animal, Gender, Energy_Level } from '../../models/animal';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalCardComponent implements OnInit {

  Gender = Gender;
  EnergyLevel = Energy_Level;
  @Input() animal: Animal;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getPetInfo() {
    console.log(this.animal.id);
    this.router.navigateByUrl(`/animals/${this.animal.id}`);
  }

}
