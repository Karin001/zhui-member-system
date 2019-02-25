import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/';
import { IdentityService } from '../identity.service';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {
  constructor(private identitySrc:IdentityService){

  }
  canActivate(){
    console.log('member guard')
   return this.identitySrc.identity.pipe(map(identityInfo => identityInfo.identity === environment.auth_status.member))
 }
}