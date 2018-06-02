import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getPetInfo() {
    this.router.navigateByUrl('a123');
  }

}
