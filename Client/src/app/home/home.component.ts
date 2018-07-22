import { Component, OnInit } from '@angular/core';
import { FlighLookup } from '../shared/models/flightLookup';
import { LookupService } from '../shared/services/lookup.service';
import { Hotel } from '../shared/models/hotel';

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
  constructor(private _lookupService:LookupService) { 
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.flightLookupObj.bsRangeValue = [this.bsValue, this.maxDate];
  }

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  ngOnInit() {
  }

  submitLookup(){
    this._lookupService.flightLookup(this.flightLookupObj).subscribe((res:Hotel[])=>{
      console.log(res)
      this.hotels=res;
    })
  }

}
