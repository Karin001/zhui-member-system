import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/auth/login.service';
import { MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
export interface LoginInfo {
  id: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password_hide = true;
  loginPending = false;
  loginInfo: LoginInfo = {
    id: '',
    password: ''
  }
  constructor(private loginService: LoginService, private snk: MatSnackBar) { }

  ngOnInit() {
  }
  login() {
    this.loginPending = true;
    // console.log(this.loginInfo)
    this.loginService.login(this.loginInfo)

      .subscribe(data => {
        this.loginPending = false;
        if (!data['success']) {
          this.snk.open(data['errorHint'], null, {
            duration: 2000
          })
        } else {

        }
      })
  }

}
