import { Component, OnInit } from '@angular/core';
import { sampleDogData } from '../../models/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  ages = [
    { value: '<1-0', viewValue: '< 1 year' },
    { value: '1-3-1', viewValue: '1-3 years' },
    { value: '3-7-2', viewValue: '3-7 years' },
    { value: '7+-2', viewValue: '7+ years' }
  ];

  sexes = [
    { value: 'female-0', viewValue: 'Female' },
    { value: 'male-1', viewValue: 'Male' }
  ];
  animals = sampleDogData;

  energyLevels = [
    { value: 'low-0', viewValue: 'Low' },
    { value: 'average-1', viewValue: 'Average' },
    { value: 'high-1', viewValue: 'High' }
  ];

  weights = [
    { value: '<25-0', viewValue: '< 25 lbs' },
    { value: '25-50-1', viewValue: '25-50 lbs' },
    { value: '50-75-1', viewValue: '50-75 lbs' },
    { value: '75+-1', viewValue: '75+ lbs' }
  ];

  days = [
    { value: '<30-0', viewValue: '< 30 days' },
    { value: '30-60-1', viewValue: '30-60 days' },
    { value: '60-90-1', viewValue: '60-90 days' },
    { value: '90+-1', viewValue: '90+ days' }
  ];

  compatibilities = [
    { value: 'kids-0', viewValue: 'Good with kids' },
    { value: 'cats-1', viewValue: 'Good with cats' },
    { value: 'dogs-1', viewValue: 'Good with dogs' },
  ];

  houseTraineds = [
    { value: 'yes-0', viewValue: 'Yes' },
    { value: 'no-1', viewValue: 'No' },
  ];

  constructor() { }

  ngOnInit() { }
}

