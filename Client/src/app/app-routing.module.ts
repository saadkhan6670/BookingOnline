import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { HotelsListComponent }      from './hotels-list/hotels-list.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }      from './contact/contact.component';
import { AdminHotelsComponent } from './admin/admin-hotels/admin-hotels.component';
import { HotelFormComponent } from './admin/hotel-form/hotel-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel-list', component: HotelsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'admin/admin-hotels', component: AdminHotelsComponent},
  { path: 'admin/hotel/new', component: HotelFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}