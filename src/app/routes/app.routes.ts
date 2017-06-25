import { Routes } from '@angular/router';

import { AppComponent } from '../components/app/app.component';
import { LandingComponent } from '../components/landing/landing.component';
import { InteractionComponent } from '../components/interaction/interaction.component';

export const appRoutes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'interaction', component: InteractionComponent }
];