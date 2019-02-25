import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/project/project.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent implements OnInit {
  projectList$ =
    this.projectService.getList()
      .pipe(
        filter(res => res.success),
        map(res => res.payload)
      );
  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
  }

}
