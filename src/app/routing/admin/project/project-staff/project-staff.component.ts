import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-staff',
  templateUrl: './project-staff.component.html',
  styleUrls: ['./project-staff.component.scss']
})
export class ProjectStaffComponent implements OnInit {
  items=[
    "2018-12",
    "2019-1",
    "2019-2",
    "2019-3",
  ]
  selectedValue;
  staffData;
  constructor() { }

  ngOnInit() {
  }
  newSelect(data){
    this.staffData = data;
  }
  onClick(){}
}
