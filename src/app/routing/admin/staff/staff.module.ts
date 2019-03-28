import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StafflistComponent } from './stafflist/stafflist.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StafflistComponent, NewStaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    SharedModule,
    FormsModule


  ]
})
export class StaffModule { }
