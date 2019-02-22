import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate, CanActivateChild } from '@angular/router';
import { IdentityService } from '../identity.service';

import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class IdentityGuard implements CanActivate, CanActivateChild {
  identity;
  constructor(private identityService: IdentityService,
    private router: Router) {
    this.identityService.identity
      .subscribe(identityInfo => {
        this.identity = identityInfo.identity;

      })
  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(state.url)
    if (state.url === '/passport/auth/reset-password') {
      return this.identity !== environment.auth_status.visitor
    } else if (state.url === '/passport/auth/login') {
      return this.identity === environment.auth_status.visitor
    } else if (state.url.split('/')[1] === 'admin') {
      return this.identity === environment.auth_status.admin
    } else if (state.url.split('/')[1] === 'member') {
      return this.identity === environment.auth_status.member
    } else {
      return true
    }

  }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);

  }
}
