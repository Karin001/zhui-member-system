import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StafflistComponent } from './stafflist/stafflist.component';
import { NewStaffComponent } from './new-staff/new-staff.component';

const routes: Routes = [
  {path:'',redirectTo:'all',pathMatch:'full'},
  {path:'all',component:StafflistComponent},
  {path:'add',component:NewStaffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
