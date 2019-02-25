import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProjectlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
