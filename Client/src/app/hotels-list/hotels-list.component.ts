import { Component, OnInit } from '@angular/core';
import { Hotel } from '../shared/models/hotel';
import { FlighLookup } from '../shared/models/flightLookup';
import { LookupService } from '../shared/services/lookup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  hotels: Hotel[];
  rate1: number = 1;
  rate2: number = 2;
  rate3: number = 3;
  rate4: number = 4;
  rate5: number = 5;

  flightLookupObj = new FlighLookup;
  minDate = new Date();
  // max : number=6;


  constructor(private activatedRoute: ActivatedRoute, private _lookupService: LookupService, private router: Router) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this._lookupService.flightLookup(params).subscribe((res: Hotel[]) => {
        this.hotels = res;
        this.flightLookupObj.location = params['location']
        this.flightLookupObj.guest = params['guest']
        // this.flightLookupObj.bsRangeValue = ['07/27/2018', '08/03/2018']];
      })
    });
    
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

    // console.log("from hre"  moment(this.maxDate).format('L'));

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
