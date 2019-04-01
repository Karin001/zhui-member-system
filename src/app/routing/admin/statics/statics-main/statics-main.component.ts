import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statics-main',
  templateUrl: './statics-main.component.html',
  styleUrls: ['./statics-main.component.scss']
})
export class StaticsMainComponent implements OnInit {

  selectedStaff;
  selectedProject;
  selectedDate
  projects=['华为焊板子','华为焊板子','华为焊板子','华为焊板子']
  dates=['2011-11-12','2011-11-12','2011-11-12','2011-11-12']
  staffs=['张三','李四','王麻子']
  constructor() { }

  ngOnInit() {
  }

}
