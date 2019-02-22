import { Component, OnInit } from '@angular/core';
import { IdentityService, IdentityInfo } from 'src/app/core/identity.service';
import { LogoutService } from 'src/app/core/auth/logout.service';
export interface LogoutInfo{
  staffId:string;
}

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {
  identity:IdentityInfo;
  constructor(
    private identityService: IdentityService,
    private logoutService:LogoutService
    ) { 
    this.identityService.identity.subscribe(identityInfo=>{
      this.identity = identityInfo
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
