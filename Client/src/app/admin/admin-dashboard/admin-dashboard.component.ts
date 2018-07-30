import { Component, OnInit } from '@angular/core';
import { LookupService } from '../../shared/services/lookup.service';
import { Hotel } from '../../shared/models/hotel';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  hotels: Hotel[];

  constructor( private _lookupService: LookupService) { 
    this._lookupService.GetPopularHotels().subscribe((res: Hotel[]) => {
      this.hotels = res;
    })

  }

  ngOnInit() {
  }

}
