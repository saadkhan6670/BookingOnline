import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule,BsDatepickerModule,TypeaheadModule, BsDropdownModule  } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelDisplayComponent } from './hotel-display/hotel-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsListComponent,
    HotelDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
