import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// Forms and Reactive Forms Modules
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md';
// Forms and Reactive Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
 
  minDate = new Date();
  maxDate = new Date();
  bsRangeValue: Date[];

  constructor() { 
    //booking room is ristricted to maximum 1 month only, renew after it
    this.minDate.setDate(this.minDate.getDate() - 1);  // minimum date is set to today
    this.maxDate.setDate(this.maxDate.getDate() + 30);  // maximum date is set to 1 month from now
  }

  ngOnInit() {
  }
  numberOfDays : number;  // to count number of days from date range
 price: number;
 // to calculate the total cost which is price multiplied by numberOfDays to stay
 total = this.price * this.numberOfDays;

  signupFormModalName = new FormControl('', Validators.required);
  signupFormModalEmail = new FormControl('', Validators.email);
  signupFormModalPassword = new FormControl('', Validators.required);

  // modalFormSubscriptionName = new FormControl('', Validators.required);
  // modalFormSubscriptionEmail = new FormControl('', Validators.email);

}
