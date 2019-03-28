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
  projectMonthEvent: Project_daily_event[];
  myFilter;
  minDate;
  showData;
 

  items=[
    "2018-12",
    "2019-1",
    "2019-2",
    "2019-3",
  ]
  selectedValue;
  constructor(
    private route: ActivatedRoute,
    private projectSrc: ProjectService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      switchMap(id =>
        this.projectSrc.getProjectMonthEvent({
          projectId: id,
          projectMonth: new Date().getMonth()
        }))
    )
      .subscribe(res => {
        if (res.success) {
          this.projectMonthEvent = res.payload;
          this.myFilter = (d: Date): boolean => {
            const dates =  this.projectMonthEvent.map(data => data.eventDate);
            return dates.includes(d.toISOString().slice(0, 10));
          }

        }
      })
  }

  onClick(data){
    console.log(data)
    this.showData = {...data};
  }

}
