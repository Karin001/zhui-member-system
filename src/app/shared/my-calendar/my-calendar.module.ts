import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCalendarComponent } from './base-calendar/base-calendar.component';
import { MyProjectCalendarComponent } from './project-calendar/myproject-calendar.component';

@NgModule({
  declarations: [BaseCalendarComponent, MyProjectCalendarComponent],
  imports: [
    CommonModule
  ],
  exports:[MyProjectCalendarComponent]
})
export class MyCalendarModule { }
