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
}
