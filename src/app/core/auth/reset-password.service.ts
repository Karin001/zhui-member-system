import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResetPSInfo } from '../../routing/auth/reset-password/reset-password.component'
import { environment } from '../../../environments/environment'
import { tap } from 'rxjs/operators';
import { IdentityService } from '../identity.service';
export interface ResetPSResType{
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
export class ResetPSService {

  constructor(private http: HttpClient,
    private identityService: IdentityService) { }
  reset(resetPSInfo: ResetPSInfo) {
    const url = environment.baseUrl + environment.url.resetPassword;
    return this.http.post<ResetPSResType>(url, resetPSInfo)

      .pipe(
        tap(res => {
          console.log(res);
          if(res.success){
            this.identityService.identityUpdate(res.payload)
          }
        })
      )
  }
}