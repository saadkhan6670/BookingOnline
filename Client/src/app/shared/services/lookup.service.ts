import { Injectable } from '@angular/core';

import { Global } from '../../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  global = new Global();

  constructor(private _http:HttpClient) { }

  flightLookup(lookupObj){
    return this._http.post(`${this.global.getServerurl()}get-specific-hotels`,lookupObj);
  }

  GetPopularHotels(){
    return this._http.get(`${this.global.getServerurl()}get-popular-hotels`);
  }


  credtsCheck(Creds) {
   let credsname = "admin";
   let credsPass = "admin";

   if(Creds.username === credsname && Creds.password === credsPass){
     return true;
   }
   else {
      false;
   }
  }

  HotelBooked(nic_id , hotel_id , book_from , book_to){
    return this._http.post(`${this.global.getServerurl()}hotel-booking`,{nic_id , hotel_id , book_from , book_to});
  }
  GetBooking(){
    return this._http.get(`${this.global.getServerurl()}get-booking`);
  }
}
