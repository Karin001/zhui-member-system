import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectCalendarComponent } from './project-calendar/project-calendar.component';
import { DailyEventComponent } from './project-calendar/daily-event/daily-event.component';
import { MemberChangeComponent } from './project-calendar/member-change/member-change.component';

@NgModule({
  declarations: [ProjectlistComponent, ProjectCalendarComponent, DailyEventComponent, MemberChangeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
