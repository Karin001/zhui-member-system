import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/core/identity.service';
import {environment} from '../../../environments/environment'
@Component({
  selector: 'app-swich',
  templateUrl: './swich.component.html',
  styleUrls: ['./swich.component.scss']
})
export class SwichComponent implements OnInit {

  constructor(private router:Router,private identityService:IdentityService) { 
    console.log(1)
    identityService.identity.subscribe(identityInfo => {
      if(identityInfo.identity === environment.auth_status.admin){
        router.navigateByUrl('/admin')
      } else if(identityInfo.identity === environment.auth_status.member){
        router.navigateByUrl('/member')
      } else if(identityInfo.identity === environment.auth_status.visitor){
        router.navigateByUrl('/passport/auth/login')
      }else if(identityInfo.identity === environment.auth_status.lockUser){
        router.navigateByUrl('/passport/auth/reset-password')
      }
    })
  }

  ngOnInit() {
  }

}
