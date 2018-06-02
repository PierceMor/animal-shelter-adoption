import { Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalInfoComponent } from './components/animal-info/animal-info.component';

export const appRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'dogs', component: AnimalListComponent },
    { path: 'dogs/:tagId', component: AnimalInfoComponent }
];
