import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface IdentityInfo {
  status:string;
  id:string | null;
}

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  identity = new BehaviorSubject<IdentityInfo>(null)
  constructor() { }
  identityUpdate(identityInfo:IdentityInfo){
    this.identity.next(identityInfo)
  }
}
