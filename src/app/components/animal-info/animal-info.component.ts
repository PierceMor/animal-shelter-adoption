import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.css']
})
export class AnimalInfoComponent implements OnInit {

  petId;
  animal;

  constructor(private activatedRoute: ActivatedRoute, private animalService: AnimalService) {
    this.activatedRoute.params.subscribe(params => {
      this.petId = params['tagId'];
    });
  }

  ngOnInit() {
    this.animalService.getAnimalById(this.petId);
    this.animalService.animals.subscribe(animals => {
      this.animal = animals[0];
    });
  }

}
