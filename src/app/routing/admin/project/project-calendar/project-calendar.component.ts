import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { ProjectService, Project_daily_event } from 'src/app/core/project/project.service';

@Component({
  selector: 'app-project-calendar',
  templateUrl: './project-calendar.component.html',
  styleUrls: ['./project-calendar.component.scss']
})
export class ProjectCalendarComponent implements OnInit {
  projectMonthEvent:Project_daily_event[]
  constructor(
    private route:ActivatedRoute,
    private porjectSrc:ProjectService
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      switchMap(id => 
        this.porjectSrc.getProjectMonthEvent({
          projectId:id,
          projectMonth:new Date().getMonth()
        })) 
    )
    .subscribe(res=>{
      if(res.success){
        this.projectMonthEvent = res.payload
      }
    })
  }

}
