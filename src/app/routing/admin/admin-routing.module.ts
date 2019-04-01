import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'project',pathMatch:'full'},
  {path:'project',loadChildren:'./project/project.module#ProjectModule'},
  {path:'people',loadChildren:'./staff/staff.module#StaffModule'},
  {path:'statics',loadChildren:'./statics/statics.module#StaticsModule'},
  {path:'diary',loadChildren:'./diary/diary.module#DiaryModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
