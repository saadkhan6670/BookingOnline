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

  // dikhao server
    return this._http.post(`${this.global.getServerurl()}get-specific-hotels`,lookupObj);
  }

}