import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.css']
})
export class AnimalInfoComponent implements OnInit {

  petId;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.petId = params['tagId'];
    });
  }

  ngOnInit() {
  }

}
