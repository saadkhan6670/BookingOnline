import { BrowserModule } from '@angular/platform-browser';
//third party imports
import { ModalModule, WavesModule, InputsModule, DropdownModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule,BsDatepickerModule,TypeaheadModule, BsDropdownModule  } from 'ngx-bootstrap';
// forms and form validator imports
import { FormsModule } from '@angular/forms';
// import { CustomFormsModule } from 'ng2-validation';

import { MatButtonModule } from '@angular/material/button';
// components imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
//admin panel components
import { AdminHotelsComponent } from './admin/admin-hotels/admin-hotels.component';
import { HotelFormComponent } from './admin/hotel-form/hotel-form.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component'; 

// For MDB Angular Free
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsListComponent,
    ModalFormComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    AdminHotelsComponent,
    HotelFormComponent,
    MainAdminComponent
  ],


  imports: [
    // MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    WavesModule.forRoot(),
    InputsModule.forRoot(),
    ReactiveFormsModule,
    // DropdownModule.forRoot(),
    MatButtonModule
    // CustomFormsModule

  ],
  schemas: [ NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

