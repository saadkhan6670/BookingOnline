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
   rate1: number = 1;
   rate2: number = 2;

   rate3: number = 3;

   rate4: number = 4;
   rate5: number = 5;

  // max : number=6;


  constructor() {
//     this._lookupService.flightLookup().subscribe((res:Hotel[])=>{
//   this.hotels=res;
// console.log(this.hotels)
// })

   }

  ngOnInit() {
  }



}
