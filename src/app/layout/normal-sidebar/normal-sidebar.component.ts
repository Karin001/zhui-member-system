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
  constructor(identityService: IdentityService) {
    identityService.identity.subscribe(identityInfo => {
      switch (identityInfo.identity) {
        case environment.auth_status.admin:
        case environment.auth_status.pm:

          this.menuItems = environment.permission.admin;
          console.log(this.menuItems);

          break;
        case environment.auth_status.member:


          this.menuItems = environment.permission.member;
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
  }

}
