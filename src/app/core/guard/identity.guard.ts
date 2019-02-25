import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate, CanActivateChild } from '@angular/router';
import { IdentityService } from '../identity.service';

import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IdentityGuard implements CanActivate{
  identity;
  constructor(private identityService: IdentityService,
    private router: Router) {
    this.identityService.identity
      .subscribe(identityInfo => {
        this.identity = identityInfo.identity;

      })
  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    console.log(state.url)
    return this.identityService.identity.pipe(map(identityInfo => {
     if (state.url === '/passport/auth/login') {
        return identityInfo.identity === environment.auth_status.visitor
      } else{
        return identityInfo.identity !== environment.auth_status.visitor
      }
    }))
  

  }
}
