import { Component, OnInit } from '@angular/core';
import { HotelFormComponent } from '../hotel-form/hotel-form.component';
import { LookupService } from '../../shared/services/lookup.service';
import { Hotel } from '../../shared/models/hotel';

@Component({
  selector: 'app-admin-hotels',
  templateUrl: './admin-hotels.component.html',
  styleUrls: ['./admin-hotels.component.css']
})
export class AdminHotelsComponent implements OnInit {
  hotels: Hotel[];

  constructor(private _lookupService: LookupService) {
    this._lookupService.GetPopularHotels().subscribe((res: Hotel[]) => {
      this.hotels = res;
      console.log(this.hotels)
    })
   }

  ngOnInit() {
  }

}

