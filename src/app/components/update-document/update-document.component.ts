import { Component, OnInit } from '@angular/core';
import { Animal, Gender, Energy_Level } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {

  animal: Animal = new Animal();
  gender  = Gender;
  energy = Energy_Level;


  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }
  
  update(){
    console.log(this.animal);
    this.animalService.addAnimal(this.animal);
    
  }

}
