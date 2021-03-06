import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/core/identity.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-normal-sidebar',
  templateUrl: './normal-sidebar.component.html',
  styleUrls: ['./normal-sidebar.component.scss']
})
export class NormalSidebarComponent implements OnInit {
  menuItems;
  constructor(identityService:IdentityService) {
    identityService.identity.subscribe(identityInfo => {
      switch (identityInfo.identity) {
        case environment.auth_status.admin:
          this.menuItems = environment.permission.admin
          break;
        case environment.auth_status.member:
          this.menuItems = environment.permission.member
        default:
          break;
      }
    })
   }

  ngOnInit() {
  }

}
