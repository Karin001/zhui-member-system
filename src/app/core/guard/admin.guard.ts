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
export class AdminGuard implements CanActivate {
  constructor(private identitySrc:IdentityService){

  }
  canActivate(){
    console.log('admin pm guard')
   return this.identitySrc.identity.pipe(map(identityInfo =>  [environment.auth_status.admin,environment.auth_status.pm].includes(identityInfo.identity)))
 }
}
