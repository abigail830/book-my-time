import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  alertMessage = '';
  userName = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userName);
    console.log(this.password);
  }

}
