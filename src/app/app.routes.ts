import { Routes } from '@angular/router';

import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const appRoutes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'animals', component: AnimalCardComponent }
];
