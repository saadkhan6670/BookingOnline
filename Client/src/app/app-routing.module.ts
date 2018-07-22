import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { HotelsListComponent }      from './hotels-list/hotels-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel-list', component: HotelsListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}