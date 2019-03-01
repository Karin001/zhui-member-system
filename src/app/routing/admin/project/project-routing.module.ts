import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectCalendarComponent } from './project-calendar/project-calendar.component';

const routes: Routes = [
  {path:'',redirectTo:'projectlist',pathMatch:'full'},
  {path:'projectlist',component:ProjectlistComponent},
  {path:'project-calendar/:id',component:ProjectCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
