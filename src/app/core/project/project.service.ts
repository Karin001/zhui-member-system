import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';


export interface Project_info {
  projectName: string;
  projectId: string;
  projectAddr: string;
  projectCompany: string;
  projectStartDate: Date|string;
  projectNOP: number;// NOP -- number of people
  projectStatus: number; // 0 -- 进行中 1 -- 暂停 2 -- 已完成
  projectEndDate: Date |string| null;
}
export interface ProjectListResType {
  success: boolean;
  payload: Project_info[];
}
export interface ProjectCalendarReqType {
  projectId:string;
  projectMonth:number;
}
export interface ProjectCalendarResType {
  success:boolean;
  payload:Project_daily_event[];
}
export interface Project_daily_event{
  eventDate:Date | string;
  mostImportantProblem:MIP[] | null;
  memberExchange:MemberExchange | null;
}
export interface MIP{
  content:string;
  title:string;
  problemId:string;
  problemStatus:number; // 0 -- 未关闭 1 -- 已关闭
  closeReason:string | null; //关闭理由;
  apply:{staffName:string;staffId:string;applyDate:Date | string;}
  admit:{staffName:string;staffId:string;admitDate:Date | string;}
}
export interface MemberExchange {
  memberLeaveOut: {
    staffName: string;
    staffId: string;
    to: {
      projectName: string;
      projectId: string;
    }
  }[]
  memberJoinIn: {
    staffName: string;
    staffId: string;
    from: {
      projectName: string;
      projectId: string;
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectList$ = new BehaviorSubject<Project_info>(null)
  project$ = new BehaviorSubject<any>(null)
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get<ProjectListResType>(environment.url.projectList)
      .pipe(
        tap(res => {
          console.log(res);
          console.log(environment.url.projectList)
          if (res.success) {
            this.project$.next(res.payload)
          }
        })
      )
  }

  getProjectMonthEvent(prjCalendarReq:ProjectCalendarReqType){
    return this.http.post<ProjectCalendarResType>(environment.url.projectCalendar,prjCalendarReq)
  }
}
