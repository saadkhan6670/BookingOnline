import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  constructor() { }

  save(hotel) {
    console.log(hotel); 
  }
  ngOnInit() {
  }

  categories: string[] = [

    'family room',
    'luxury room',
    'simple room'
  ];
}
