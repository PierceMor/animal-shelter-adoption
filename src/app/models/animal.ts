export class Animal {
  id: string;
  name: string;
  dob: Date;
  sex: string;
  kennel: string;
  weight: number;
  intake_date: Date;
  energy_level: Energy_Level;
  attributes: string[];
  dog_friendly: boolean;
  cat_friendly: boolean;
  kid_friendly: boolean;
  house_trained: boolean;
  notes: string;
  surgery_date: string;
  photo_urls: string[];
  profile_active: boolean;
  location: string;

  constructor(animal?: any) {
    this.id = animal && animal.id ? animal.id : "";
    this.name = animal && animal.name ? animal.name : "";
    this.dob = animal && animal.dob ? new Date(animal.dob) : null;
    this.sex = animal && animal.sex ? animal.sex : "";
    this.kennel = animal && animal.kennel ? animal.kennel : null;
    this.weight = animal && animal.weight ? animal.weight : null;
    this.intake_date =
      animal && animal.intake_date ? new Date(animal.intake_date) : null;
    this.energy_level =
      animal && animal.energy_level
        ? animal.energy_level
        : Energy_Level.MODERATE;
    this.attributes = animal && animal.attributes ? animal.attributes : [];
    this.dog_friendly =
      animal && animal.dog_friendly ? animal.dog_friendly : false;
    this.cat_friendly =
      animal && animal.cat_friendly ? animal.cat_friendly : false;
    this.kid_friendly =
      animal && animal.kid_friendly ? animal.kid_friendly : false;
    this.house_trained =
      animal && animal.house_trained ? animal.house_trained : false;
    this.notes = animal && animal.notes ? animal.notes : "";
    this.surgery_date =
      animal && animal.surgery_date ? animal.surgery_date : "";
    this.photo_urls = animal && animal.photo_urls ? animal.photo_urls : [];
    this.profile_active =
      animal && animal.profile_active ? animal.profile_active : false;
    this.location = animal && animal.location ? animal.location : "";
  }
}

export enum Energy_Level {
  HIGH = "high",
  MODERATE = "moderate",
  LOW = "low"
}

export enum Gender {
  MALE = "m",
  FEMALE = "f"
}
