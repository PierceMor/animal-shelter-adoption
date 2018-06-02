import { Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalInfoComponent } from './components/animal-info/animal-info.component';
import { ContactComponent } from './components/contact/contact.component';
import { LostComponent } from './components/lost/lost.component';
import { UpdateDocumentComponent } from './components/update-document/update-document.component';

export const appRoutes: Routes = [
    { path: 'animals', component: AnimalListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'lost', component: LostComponent },
    { path: 'updateDocument', component: UpdateDocumentComponent },
    { path: 'animals/:tagId', component: AnimalInfoComponent },
    { path: '**', redirectTo: '/animals', pathMatch: 'full' }
    
];
