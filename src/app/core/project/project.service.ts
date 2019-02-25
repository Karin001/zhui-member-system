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
}
