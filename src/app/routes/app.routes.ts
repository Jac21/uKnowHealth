import { Routes } from '@angular/router';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { InteractionComponent } from '../components/interaction/interaction.component';

export const appRoutes: Routes = [
    { path: '', component: NavbarComponent, pathMatch: 'full' },
    { path: 'interaction', component: InteractionComponent }
];