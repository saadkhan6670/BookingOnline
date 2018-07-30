import { Component, OnInit } from '@angular/core';
import { LookupService } from '../../shared/services/lookup.service';
import { Booking } from '../../shared/models/Booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  Bookings:Booking[]

  constructor( private _lookupService: LookupService) { 
    this._lookupService.GetBooking().subscribe((res: Booking[]) => {
      this.Bookings = res; 
      console.log(this.Bookings)
    })

  }

  ngOnInit() {
  }

}

