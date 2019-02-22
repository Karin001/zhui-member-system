import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { tap, } from 'rxjs/operators';
import { IdentityService } from '../identity.service';
import { LogoutInfo } from 'src/app/layout/normal/normal.component';


export interface LogoutResType{
  success:boolean;
  errorInfo?:string;
  errorHint?:string;
}


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient,
    private identityService:IdentityService,
    ) { }
  logout(logoutInfo: LogoutInfo) {
    const url = environment.baseUrl + environment.url.logout
    return this.http.post<LogoutResType>(url, logoutInfo)

      .pipe(
        tap(res => {
          console.log(res);
          if(res.success){
            this.identityService.identityUpdate({
                identity:environment.auth_status.visitor,
                staffId:null,
                staffName:null
            })
          } 
        })
      )
  }
}