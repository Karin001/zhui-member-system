import { Component, OnInit, Input } from '@angular/core';
// export interface MemberExchange {
//   memberLeaveOut: {
//     staffName: string;
//     staffId: string;
//     to: {
//       projectName: string;
//       projectId: string;
//     }
//   }[]
//   memberJoinIn: {
//     staffName: string;
//     staffId: string;
//     from: {
//       projectName: string;
//       projectId: string;
//     }
//   }[]
// }

// const mockMemberExchange: MemberExchange = {
//   memberJoinIn: [
//     {
//       staffName: 'jeson',
//       staffId:'3f234',
//       from:{
//         projectName:'新店开发项目',
//         projectId:'sdfsdf3234234'
//       }
//     },
//     {
//       staffName: 'kifi',
//       staffId:'3f23df3',
//       from:{
//         projectName:'新店开发项目',
//         projectId:'sdfsdf3234234'
//       }
//     }
//   ],
//   memberLeaveOut:[
//     {
//       staffName: 'jeson',
//       staffId:'3f234',
//       to:{
//         projectName:'新世纪永中开发项目',
//         projectId:'sdfsdf32342123'
//       }
//     }
//   ]
// }
@Component({
  selector: 'app-member-change',
  templateUrl: './member-change.component.html',
  styleUrls: ['./member-change.component.scss']
})
export class MemberChangeComponent implements OnInit {
  @Input()memberExchangeList;
  constructor() { }

  ngOnInit() {
  }

}
