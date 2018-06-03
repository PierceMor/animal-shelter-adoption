import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  public animals: Observable<any[]>;

  constructor(private animalService: AnimalService) {
    this.refreshList();
  }

  ngOnInit() {
    setInterval(() => this.animals = this.animalService.activeAnimals, 100);
  }

  refreshList() {
    this.animals = this.animalService.activeAnimals;
  }

}

