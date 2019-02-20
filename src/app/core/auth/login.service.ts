import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../../routing/auth/login/login.component'
import { environment } from '../../../environments/environment'
import { tap, } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(loginInfo: LoginInfo) {
    return this.http.post(environment.url.login, loginInfo)

      .pipe(
        tap(data => {
          console.log(data)
        })
      )
  }
}
