import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Animal } from '../models/animal';
import { QueryItem } from '../components/animal-filter/animal-filter.component';

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

  // getAllAnimals() {
  //   this.allAnimals = this.db.collection<Animal>("/animals").valueChanges();
  // }

  getActiveAnimals() {
    this.activeAnimals = this.db
      .collection<Animal>('/animals', ref =>
        ref.where('profile_active', '==', true)
      )
      .valueChanges();
  }



  // creating a new function and not remaking 
  addAnimal(animal: Animal) {
    // this.db.collection<Animal>('/animals').add(animal);
    this.itemsCollection.add(JSON.parse(JSON.stringify(animal)));
  }





  filterAnimals(query: QueryItem[]) {
    const collection = this.db.collection<Animal>('animals');
    collection.ref.where('profile_active', '==', true);

    query.forEach(element => {
      if (element.value) {
        collection.ref.where(element.field, element.operator, element.value);
      }
    });

    this.activeAnimals = collection.valueChanges();
  }
}
