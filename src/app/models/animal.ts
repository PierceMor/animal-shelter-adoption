export class Animal {
    id: string;
    name: string;
    dob: string;
    sex: string;
    kennel: string;
    weight: number;
    intake_date: string;
    energy_level: Energy_Level;
    attributes: string[];
    dog_friendly: boolean;
    cat_friendly: boolean;
    house_trained: boolean;
    notes: string;
    surgery_date: string;
    photo_urls: string[];
    profile_active: boolean;

    constructor(animal?: any) {
        this.id = (animal && animal.id) ? animal.id : '';
        this.name = (animal && animal.name) ? animal.name : '';
        this.dob = (animal && animal.dob) ? animal.dob : '';
        this.sex = (animal && animal.sex) ? animal.sex : '';
        this.kennel = (animal && animal.kennel) ? animal.kennel : null;
        this.weight = (animal && animal.weight) ? animal.weight : null;
        this.intake_date = (animal && animal.intake_date) ? animal.intake_date : '';
        this.energy_level = (animal && animal.energy_level) ? animal.energy_level : Energy_Level.MODERATE;
        this.attributes = (animal && animal.attributes) ? animal.attributes : [];
        this.dog_friendly = (animal && animal.dog_friendly) ? animal.dog_friendly : false;
        this.cat_friendly = (animal && animal.cat_friendly) ? animal.cat_friendly : false;
        this.house_trained = (animal && animal.house_trained) ? animal.house_trained : false;
        this.notes = (animal && animal.notes) ? animal.notes : '';
        this.surgery_date = (animal && animal.surgery_date) ? animal.surgery_date : '';
        this.photo_urls = (animal && animal.photo_urls) ? animal.photo_urls : [];
        this.profile_active = (animal && animal.profile_active) ? animal.profile_active : false;
    }
}

export enum Energy_Level {
    HIGH = 'orange',
    MODERATE = 'blue',
    LOW = 'green'
}

export enum Gender {
    MALE = 'm',
    FEMALE = 'f'
}

export const sampleDogData: any = [
    new Animal({
        'id': 'A771016',
        'name': 'Beasley',
        'dob': 'January 1, 2013',
        'sex': 'm',
        'kennel': '033',
        'weight': 80,
        'intake_date': 'March 3, 2018',
        'energy_level': 'green',
        'dog_friendly': true,
        'cat_friendly': false,
        'house_trained': true,
        'surgery_date': 'September 1, 2013',
        'attributes': [
            'EA',
            'ER',
            'GS',
            'H',
            'HT',
            'J',
            'LB',
            'LLW',
            'LW',
            'LWO',
            'M',
            'RR',
            'SP',
            'TM'
        ],
        'notes': 'Good doggo',
        'photo_urls': [
            'http://petharbor.com/get_image.asp?RES=Detail&ID=A769824&LOCATION=ASTN'
        ],
        'profile_active': true
    }),
    new Animal({
        'id': 'A770990',
        'name': 'McKenzie',
        'dob': 'January 30, 2015',
        'sex': 'f',
        'kennel': '440',
        'weight': 70,
        'intake_date': 'March 3, 2018',
        'energy_level': 'blue',
        'dog_friendly': true,
        'cat_friendly': false,
        'house_trained': true,
        'surgery_date': 'November 1, 2013',
        'attributes': ['EA', 'ER'],
        'notes': 'Fetches ball like no other',
        'photo_urls': [
            'http://petharbor.com/get_image.asp?RES=Detail&ID=A770990&LOCATION=ASTN'
        ],
        'profile_active': true
    }),
    new Animal({
        'id': 'A768706',
        'name': 'Buttercup',
        'dob': 'January 30, 2016',
        'sex': 'f',
        'kennel': '044',
        'weight': 70,
        'intake_date': 'March 3, 2018',
        'energy_level': 'orange',
        'dog_friendly': false,
        'cat_friendly': true,
        'house_trained': true,
        'surgery_date': 'November 1, 2017',
        'attributes': ['M', 'RR', 'SP', 'TM'],
        'notes': 'Great walking buddy',
        'photo_urls': [
            'http://petharbor.com/get_image.asp?RES=Detail&ID=A768706&LOCATION=ASTN'
        ]
    }),
    new Animal({
        'id': 'A767004',
        'name': 'Hammy',
        'dob': 'January 30, 2016',
        'sex': 'm',
        'kennel': '508',
        'weight': 100,
        'intake_date': 'March 3, 2018',
        'energy_level': 'blue',
        'dog_friendly': true,
        'cat_friendly': true,
        'house_trained': true,
        'surgery_date': 'December 1, 2017',
        'attributes': ['J', 'RR', 'SP', 'TM'],
        'notes': 'Will demonlish you in tug of war',
        'photo_urls': [
            'http://petharbor.com/get_image.asp?RES=Detail&ID=A767004&LOCATION=ASTN'
        ],
        'profile_active': true
    })
];
