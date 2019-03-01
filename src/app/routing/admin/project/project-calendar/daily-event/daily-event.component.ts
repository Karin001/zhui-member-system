import { Component, OnInit } from '@angular/core';
export interface MIP{
  content:string;
  title:string;
  problemId:string;
  problemStatus:number; // 0 -- 未关闭 1 -- 已关闭
  closeReason:string | null; //关闭理由;
  apply:{staffName:string;staffId:string;applyDate:Date | string;}
  admit:{staffName:string;staffId:string;admitDate:Date | string;}
}
const mockdata:MIP[] = [
  {
    title:'电路板烧毁',
    content:'电路板因为操作不当而被烧毁了',
    problemId:'d342ds',
    problemStatus:0,
    closeReason:null,
    apply:{
      staffName:'jackie',
      staffId:'df324',
      applyDate:'2018-03-23'
    },
    admit:{
      staffName:'zhuxiwen',
      staffId:'df32344',
      admitDate:'2018-03-23'
    }

  }
]
@Component({
  selector: 'app-daily-event',
  templateUrl: './daily-event.component.html',
  styleUrls: ['./daily-event.component.scss']
})
export class DailyEventComponent implements OnInit {
  mipList = mockdata
  constructor() { }

  ngOnInit() {
  }

}
