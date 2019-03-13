import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../../routing/auth/login/login.component'
import { environment } from '../../../environments/environment'
import { tap, } from 'rxjs/operators';
import { IdentityService } from '../identity.service';


export interface LoginResType{
  success:boolean;
  payload?:{
    staffName:string;
    staffId:string;
    identity:string;
  }
  errorInfo?:string;
  errorHint?:string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private identityService:IdentityService,
    ) { }
  login(loginInfo: LoginInfo) {
    const url = environment.baseUrl + environment.url.login
    return this.http.post<LoginResType>(url, JSON.stringify(loginInfo) )

      .pipe(
        tap(res => {
          console.log('loginInfo', loginInfo);
          console.log(res);
          if(res.success){
            this.identityService.identityUpdate(res.payload)
          }
        })
      )
  }
}
