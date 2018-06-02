export class Animal {
    id: string;
    name: string;
    dob: string;
    sex: string;
    kennel: number;
    weight: number;
    intake_date: string;
    energy_level: Energy_Level;
    attributes: string[];
    dog_friendly: boolean;
    cat_friendly: boolean;
    house_trained: boolean;
    notes: string;
    surgery_date: string;
    photos: string[];
    profile_active: boolean;

    constructor(animal: Animal) {
        this.id = animal.id;
        this.name = animal.name;
        this.dob = animal.dob;
        this.sex = animal.sex;
        this.kennel = animal.kennel;
        this.weight = animal.weight;
        this.intake_date = animal.intake_date;
        this.energy_level = animal.energy_level;
        this.attributes = animal.attributes;
        this.dog_friendly = animal.dog_friendly;
        this.cat_friendly = animal.cat_friendly;
        this.house_trained = animal.house_trained;
        this.notes = animal.notes;
        this.surgery_date = animal.surgery_date;
        this.photos = animal.photos;
        this.profile_active = animal.profile_active;
    }
}

export enum Energy_Level {
    HIGH = 'orange',
    MODERATE = 'blue',
    LOW = 'green'
}
