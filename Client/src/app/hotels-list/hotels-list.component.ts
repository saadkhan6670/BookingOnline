import { Component, OnInit } from '@angular/core';
import { Hotel } from '../shared/models/hotel';
import { LookupService } from '../shared/services/lookup.service';


@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  hotels : Hotel[];

  constructor() {
//     this._lookupService.flightLookup().subscribe((res:Hotel[])=>{
//   this.hotels=res;
// console.log(this.hotels)
// })

   }

  ngOnInit() {
  }



}
