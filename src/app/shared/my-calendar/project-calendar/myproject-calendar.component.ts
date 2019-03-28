import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {mt} from '../../../mock/json/projectMonthData.js' 
import {mk} from '../../../mock/json/memberMonthData.js'
@Component({
  selector: 'app-myproject-calendar',
  templateUrl: './myproject-calendar.component.html',
  styleUrls: ['./myproject-calendar.component.scss']
})
export class MyProjectCalendarComponent implements OnInit {
  @Input()  projectMonthData ;
  @Input() mode = 'project';
  @Output() notifier = new EventEmitter();
  preSelected;
  get _projectMonthData(){
    if(this.projectMonthData[0].weekDay !=7){
      const fillArray = new Array(this.projectMonthData[0].weekDay -0).fill({
        fillTheMonthArray:true
      })
      return [...fillArray,...this.projectMonthData]
    } else{
      return [...this.projectMonthData]
    }
  }
  constructor() {
  
   }

  ngOnInit() {
    if(this.mode === 'project'){
      this.projectMonthData = mt.projectMonthData;
    } else if(this.mode === 'project-staff'){
      this.projectMonthData = mk.projectMonthData;
      console.log(111111111111111,this.projectMonthData)
    }
  }
  onClick(day){
    if(!day.disabled){
      this.notifier.emit(day);
      if(!this.preSelected){
        this.preSelected = day;
        day.selected = true;
      } else {
        this.preSelected.selected = false;
        this.preSelected = day;
        day.selected = true;
      }
    }
  }
}
