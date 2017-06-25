import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes/app.routes';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSliderModule, MdToolbarModule, MdInputModule, MdTooltipModule} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './components/app/app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RecordLineComponent } from './components/record-line/record-line.component';
import { VideoComponent } from './components/video/video.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { RecordGroupComponent } from './components/record-group/record-group.component';

@NgModule({
  declarations: [
    AppComponent, 
    SearchbarComponent,
    RecordLineComponent,
    VideoComponent,
    ResourcesComponent,
    NavbarComponent,
    InteractionComponent,
    RecordGroupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    MdSliderModule,
    MdToolbarModule,
    MdInputModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
