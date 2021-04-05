import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FullCalendarModule} from 'primeng/fullcalendar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsComponent } from './components/content/events/events.component';
import { NextEventsComponent } from './components/content/next-events/next-events.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    EventsComponent,
    NextEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  exports:[
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
