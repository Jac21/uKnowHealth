import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSliderModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './components/app/app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RecordLineComponent } from './components/record-line/record-line.component';
import { VideoComponent } from './components/video/video.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InteractionComponent } from './components/interaction/interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    RecordLineComponent,
    VideoComponent,
    ResourcesComponent,
    NavbarComponent,
    InteractionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdSliderModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
