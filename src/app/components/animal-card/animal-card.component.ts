import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Animal, Gender, Energy_Level } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';

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
    this.router.navigateByUrl(`/animals/${this.animal.id}`);
  }

  daysInShelter() {
    const one_day = 1000 * 60 * 60 * 24;
    const today = new Date().getTime();
    const intakeDate = new Date(this.animal.intake_date).getTime();
    const diff = today - intakeDate;

    if (intakeDate >= today) {
      return 0;
    }

    return Math.round(diff / one_day);
  }

  editPet(){
    this.router.navigateByUrl(`/update/${this.animal.id}`)
  }
}
