import { Component, OnInit } from '@angular/core';
import { sampleDogData } from '../../models/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals = sampleDogData;

  constructor() { }

  ngOnInit() {
  }

}
