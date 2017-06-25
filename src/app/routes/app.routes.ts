import { Routes } from '@angular/router';

//import { NavbarComponent } from '../components/navbar/navbar.component';
import { AppComponent } from '../components/app/app.component';
import { InteractionComponent } from '../components/interaction/interaction.component';
//import { LandingComponent } from '../components/landing/landing.component';

export const appRoutes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'interaction', component: InteractionComponent }
];