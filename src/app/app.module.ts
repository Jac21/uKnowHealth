import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSliderModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';


import 'hammerjs';

import { AppComponent } from './components/app/app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RecordLineComponent } from './components/record-line/record-line.component';
import { VideoComponent } from './components/video/video.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { RecordGroupComponent } from './components/record-group/record-group.component';
import { LandingComponent } from './components/landing/landing.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { IntroTextComponent } from './components/intro-text/intro-text.component';

@NgModule({
  declarations: [
    AppComponent, 
    SearchbarComponent,
    RecordLineComponent,
    VideoComponent,
    ResourcesComponent,
    NavbarComponent,
    InteractionComponent,
    RecordGroupComponent,
    LandingComponent,
    SelectDropdownComponent,
    IntroTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    MdSliderModule,
    MdToolbarModule,
    MdInputModule,
    MdAutocompleteModule,
    MdIconModule,
    MdGridListModule,
    MdButtonModule,
    MdTooltipModule,
    MdCardModule,
    MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
