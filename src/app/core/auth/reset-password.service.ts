import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResetPSInfo } from '../../routing/auth/reset-password/reset-password.component'
import { environment } from '../../../environments/environment'
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ResetPSService {

  constructor(private http: HttpClient) { }
  reset(resetPSInfo: ResetPSInfo) {
    return this.http.post(environment.url.resetPassword, resetPSInfo)

      .pipe(
        tap(data => {
          console.log(data)
        })
      )
  }
}