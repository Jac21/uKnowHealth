import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingComponent } from './components/landing/landing.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RecordLineComponent } from './components/record-line/record-line.component';
import { VideoComponent } from './components/video/video.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    LandingComponent,
    SearchbarComponent,
    RecordLineComponent,
    VideoComponent,
    ResourcesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
