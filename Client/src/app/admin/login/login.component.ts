import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users= [] ;

  username :string;
  password : string;

  save(userlog) {
    this.username = this.users['username'];
    this.password = this.users['password'];

    console.log(this.users);
  }
  constructor() { }

  ngOnInit() {
  }

}
