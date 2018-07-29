import { Component, OnInit, TemplateRef } from '@angular/core';
import { Hotel } from '../shared/models/hotel';
import { FlighLookup } from '../shared/models/flightLookup';
import { LookupService } from '../shared/services/lookup.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  hotels: Hotel[];
  bookedHotel : {};

  BookerNic : '';

  rate1: number = 1;
  rate2: number = 2;
  rate3: number = 3;
  rate4: number = 4;
  rate5: number = 5;

  modalRef: BsModalRef;

  flightLookupObj = new FlighLookup;
  minDate = new Date();


  constructor(private activatedRoute: ActivatedRoute,
    private _lookupService: LookupService,
    private router: Router,
    private modalService: BsModalService) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this._lookupService.flightLookup(params).subscribe((res: Hotel[]) => {
        this.hotels = res;
        this.flightLookupObj.location = params['location']
        this.flightLookupObj.guest = params['guest']
      })
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  states: string[] = [
    "Karachi",
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Multan",
    "Hyderabad",
    "Gujranwala",
    "Peshawar",
    "Quetta",
    "Islamabad"
  ];
  ngOnInit() {

  }

  submitLookup() {
    this.router.navigate(['/hotel-list'], {
      queryParams: {
        location: this.flightLookupObj.location,
        from: this.flightLookupObj.bsRangeValue[0],
        to: this.flightLookupObj.bsRangeValue[1],
        guest: this.flightLookupObj.guest
      }
    });
  }

  BookHotel(index){
     this.bookedHotel =  this.hotels[index]
  }
  ConfirmBooking(bookedHotelId){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
    console.log(params['from'])
    console.log(params['to'])
    this._lookupService.HotelBooked(this.BookerNic,bookedHotelId,params['from'] , params['to'] ).subscribe((res: Hotel[]) => {
      this.hotels = res;
      this.flightLookupObj.location = params['location']
      this.flightLookupObj.guest = params['guest']
    })

    });


// console.log(this.flightLookupObj.bsRangeValue)
  }


}
