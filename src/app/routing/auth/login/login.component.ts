import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password_hide = true;
  loginPending = false;
  loginInfo = {
    id:'',
    password:''
  }
  constructor() { }

  ngOnInit() {
  }
  login(){
    this.loginPending = true;
    console.log(this.loginInfo)
  }

}
