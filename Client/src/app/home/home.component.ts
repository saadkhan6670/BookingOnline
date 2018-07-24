import { Component, OnInit } from '@angular/core';
import { FlighLookup } from '../shared/models/flightLookup';
import { LookupService } from '../shared/services/lookup.service';
import { Hotel } from '../shared/models/hotel';
import {  Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flightLookupObj = new FlighLookup;
  bsValue = new Date();
  maxDate = new Date();
  hotels : Hotel[];

  constructor(private _lookupService:LookupService, private router: Router) { 
    
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.flightLookupObj.bsRangeValue = [this.bsValue, this.maxDate];
 
  }

  states: string[] = [
    "Karachi",
    "Lahore", 
    "Faisalabad",
    "Rawalpindi",
    "Multan",
    "Hyderabad",
    "Gujranwala",
    "Peshawar",   
    "Quetta",
      "Islamabad"
  ];

  ngOnInit() {
  }

  submitLookup(){
    // this._lookupService.flightLookup(this.flightLookupObj);
    let myMoment: moment.Moment = moment(this.bsValue);
    console.log(this.bsValue,this.maxDate,this.flightLookupObj.bsRangeValue);
    console.log(myMoment)

  //   this.router.navigate(['/hotel-list'], { queryParams: { location: this.flightLookupObj.location, from: this.flightLookupObj.bsRangeValue} });
  }



}
