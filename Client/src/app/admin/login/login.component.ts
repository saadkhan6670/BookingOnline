import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LookupService } from '../../shared/services/lookup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertUI = true ;
 
  
  constructor(private router: Router , private _lookupService: LookupService) { }

  save(userlog) {
    if( this._lookupService.credtsCheck(userlog) === true ){
      this.alertUI = true;

    }
    else {
        
      this.alertUI = false;
      
      
    }
    
   
  }

  ngOnInit() {
  }

}
