import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {

  animal: Animal = new Animal();

  constructor(
    
  ) { }

  ngOnInit() {
  }
  
  update(){
    console.log(this.animal)
  }

}
