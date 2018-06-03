import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Animal } from '../models/animal';

@Injectable()
export class AnimalService {
  private itemsCollection: AngularFirestoreCollection<Animal>;
  public animals: Observable<any[]>;
  public allAnimals: Observable<any[]>;
  public activeAnimals: Observable<any[]>;
  public animalsByAge: Observable<any[]>;
  public animalsBySex: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = this.db.collection("animals");
    this.getAllAnimals();
    this.getActiveAnimals();
  }

  getAllAnimals() {
    this.allAnimals = this.db.collection("/animals").valueChanges();
  }

  getAnimalById(id) {
    this.animals = this.db
      .collection<Animal>("/animals", ref => ref.where("id", "==", id))
      .valueChanges();
  }

  getAllAnimals() {
    this.allAnimals = this.db.collection<Animal>("/animals").valueChanges();
  }

  getActiveAnimals() {
    this.activeAnimals = this.db
      .collection<Animal>("/animals", ref =>
        ref.where("profile_active", "==", true)
      )
      .valueChanges();
  }

  addAnimal(animal: Animal) {
    // this.db.collection<Animal>('/animals').add(animal);
    this.itemsCollection.add(JSON.parse(JSON.stringify(animal)));
  }

  filterAnimals(query: any) {
    this.activeAnimals = this.db
      .collection<Animal>("/animals", ref => ref
          .where("ages", "<=", query.maxAge)
          .where("ages", ">=", query.minAge)
      .valueChanges();
  }
}
