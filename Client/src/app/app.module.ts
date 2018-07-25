import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule,BsDatepickerModule,TypeaheadModule, BsDropdownModule  } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RatingModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsListComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
