import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalInfoComponent } from './components/animal-info/animal-info.component';
import { ContactComponent } from './components/contact/contact.component';
import { LostComponent } from './components/lost/lost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    AnimalListComponent,
    AnimalInfoComponent,
    ContactComponent,
    LostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
