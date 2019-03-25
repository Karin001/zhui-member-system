import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  projectInfo = {
    title: '',
    addr: '',
    company: '',
    content: '',
    staffGroup: []
  };
  constructor() { }

  ngOnInit() {
  }
  newSelect(staff) {
    console.log('吖拍拍乐', staff);
    if (!this.projectInfo.staffGroup.map(ele => ele.staffId).includes(staff.staffId)) {
      this.projectInfo.staffGroup.push(staff);
    }
  }
  deleteStaff(staff) {
    this.projectInfo.staffGroup = this.projectInfo.staffGroup.filter(ele => ele.staffId !== staff.staffId);
  }
  addNew() {
    console.log(this.projectInfo);
  }
}
