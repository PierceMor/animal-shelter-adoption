import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AnimalService {

  public animals: Observable<any[]>;
  public allAnimals: Observable<any[]>;
  public activeAnimals: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.getAllAnimals();
    this.getActiveAnimals();
  }

  getAnimalById(id) {
    this.animals = this.db.collection('/animals', ref => ref.where('id', '==', id)).valueChanges();
  }

  getAllAnimals() {
    this.allAnimals = this.db.collection('/animals').valueChanges();
  }

  getActiveAnimals() {
    this.activeAnimals = this.db.collection('/animals', ref => ref.where('profile_active', '==', true)).valueChanges();
  }

}
