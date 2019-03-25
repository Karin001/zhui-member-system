import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectCalendarComponent } from './project-calendar/project-calendar.component';

import { MemberChangeComponent } from './project-calendar/member-change/member-change.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { FormsModule } from '@angular/forms';
import { ProjectStaffComponent } from './project-staff/project-staff.component';

@NgModule({
  declarations: [ProjectlistComponent, ProjectCalendarComponent,  MemberChangeComponent, NewProjectComponent, ProjectStaffComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
