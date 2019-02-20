import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface IdentityInfo {
  identity:string;
  staffId:string | null;
  staffName:string | null;
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
