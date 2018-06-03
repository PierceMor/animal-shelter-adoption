import { Component, OnInit } from '@angular/core';
import { Animal, Gender, Energy_Level } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {

  animal: Animal = new Animal();
  gender = Gender;
  energy = Energy_Level;

  constructor(private animalService: AnimalService, private router: Router, route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.animal.id = params['tagId'];
      this.animalService.getAnimalById(this.animal.id);
    })
  }

  ngOnInit() {
    this.animalService.animals.subscribe(animals => {
      if (animals && animals[0]) {
        this.animal = new Animal(animals[0]);
      }
    });
  }

  update() {
    console.log(this.animal);
    this.animalService.addAnimal(this.animal);
    this.router.navigateByUrl('/animals');
  }
}
