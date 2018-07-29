import { Component, OnInit } from '@angular/core';
import { FlighLookup } from '../shared/models/flightLookup';
import { LookupService } from '../shared/services/lookup.service';
import { Hotel } from '../shared/models/hotel';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flightLookupObj = new FlighLookup;
  bsValueto = new Date();
  bsValuefrom = new Date();
  hotels: Hotel[];
  minDate = new Date();

  // max: number = 5;
  // rate: number = 2;
  // isReadonly: boolean = true;

  constructor(private _lookupService: LookupService, private router: Router) {

    this.flightLookupObj.bsRangeValue = [this.bsValuefrom, this.bsValueto];
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

  submitLookup() {
  this.router.navigate(['/hotel-list'], {
      queryParams: {
        location: this.flightLookupObj.location,
        from: this.flightLookupObj.bsRangeValue[0],
        to: this.flightLookupObj.bsRangeValue[1],
        guest : this.flightLookupObj.guest
      }
    });
  }
}
