import { Component, OnInit } from '@angular/core';
import { IdentityService, IdentityInfo } from 'src/app/core/identity.service';
import { LogoutService } from 'src/app/core/auth/logout.service';
import { BreakpointObserver } from '@angular/cdk/layout';
export interface LogoutInfo{
  staffId:string;
}
const phoneSet = '(max-width: 599px)';
const computerSet = '(min-width: 1000px)'

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {
  identity:IdentityInfo;
  hasBackdrop = false;
  mode = 'side'
  constructor(
    private identityService: IdentityService,
    private logoutService:LogoutService,
    private breakpointObserver:BreakpointObserver 
    ) { 
    this.identityService.identity.subscribe(identityInfo=>{
      this.identity = identityInfo
    })
    breakpointObserver.observe([
      phoneSet,
      computerSet
    ]).subscribe(result => {
      if(result.breakpoints[computerSet]){
        [this.hasBackdrop,this.mode] = [false, 'side']
      } else if(!result.breakpoints[computerSet]){
        [this.hasBackdrop,this.mode] = [true, 'over']
      }
    })
  }

  ngOnInit() {
  }
  logout(){
    const logoutInfo:LogoutInfo = {
      staffId:this.identity.staffId
    }
    this.logoutService.logout(logoutInfo).subscribe(res => {
     
    })
  }
}
