import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  hotel= [];

  hotelName: string;
  country: string;
  category: string;
  address: string;
  cost: number;
  imageUrl: string;

  constructor( 
    private router: Router 
  ) { }

  save(hotelData) {
   this.hotelName = this.hotel['hotelName'];
   this.country = this.hotel['country'];
   this.category = this.hotel['category'];
   this.address = this.hotel['address'];
   this.cost = this.hotel['cost'];
   this.imageUrl = this.hotel['imageUrl'];

    this.router.navigate(['/admin/admin-hotels']);
    console.log(this.hotel);
  }

  ngOnInit() {
  }

  categories: string[] = [

    'family room',
    'luxury room',
    'simple room'
  ];
}
