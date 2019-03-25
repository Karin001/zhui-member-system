import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectCalendarComponent } from './project-calendar/project-calendar.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectStaffComponent } from './project-staff/project-staff.component';

const routes: Routes = [
  { path: '', redirectTo: 'projectlist', pathMatch: 'full' },
  { path: 'projectlist', component: ProjectlistComponent },
  { path: 'project-calendar/:id', component: ProjectCalendarComponent },
  { path: 'new', component: NewProjectComponent },
  { path: 'projectStaff/:id', component: ProjectStaffComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
