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
      switch (identityInfo.status) {
        case 'admin':
          this.menuItems = environment.permission.admin
          break;
        case 'member':
          this.menuItems = environment.permission.member
        default:
          break;
      }
    })
   }

  ngOnInit() {
  }

}
