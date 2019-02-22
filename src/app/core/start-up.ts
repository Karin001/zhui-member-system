import { environment } from '../../environments/environment'
import { APP_INITIALIZER } from '@angular/core'
import { IdentityService } from './identity.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResType } from './auth/login.service';
export interface IdentityResType extends LoginResType{

}
export const startUpProvider =
{
  provide: APP_INITIALIZER,
  useFactory: StartUpFactory,
  multi: true,
  deps: [IdentityService, HttpClient]
};
export function StartUpFactory(identityService: IdentityService, http: HttpClient, router: Router) {
  const data = {}
  return function () {
    return new Promise(resolve => {
      const url = environment.baseUrl + environment.url.identity
      http.post<IdentityResType>(url, {}).subscribe(res => {
        let identityInfo;
        if (!res.success && res.errorInfo === 'origin password') {
          identityInfo = {
            identity: environment.auth_status.lockUser,
            staffId: null,
            staffName: null
          }
        } else if (res.success) {
          identityInfo = res.payload
        } else {

          identityInfo = {
            identity: environment.auth_status.visitor,
            staffId: null,
            staffName: null
          }


        }
        identityService.identityUpdate(identityInfo)
        resolve()
      })
    })

  }

}
