import { HttpResponse} from '@angular/common/http'
import { ProjectListResType, ProjectCalendarResType, MIP, MemberExchange } from '../core/project/project.service';

export const projectListMock: ProjectListResType = {
    success: true,
    payload: [
        {
            projectName:'电路板维修',
            projectCompany:'富士康',
            projectId:'dsfi123123',
            projectAddr:'广东天赋路903号',
            projectEndDate:'2019-02-15',
            projectNOP:23,
            projectStartDate:'2019-01-16',
            projectStatus:0
        },
        {
            projectName:'电路板维修',
            projectCompany:'富士康',
            projectId:'dsfi123123',
            projectAddr:'广东天赋路903号',
            projectEndDate:'2019-02-15',
            projectNOP:23,
            projectStartDate:'2019-01-16',
            projectStatus:1
        },
        {
            projectName:'电路板维修',
            projectCompany:'富士康',
            projectId:'dsfi123123',
            projectAddr:'广东天赋路903号',
            projectEndDate:'2019-02-15',
            projectNOP:23,
            projectStartDate:'2019-01-16',
            projectStatus:2
        },    {
            projectName:'电路板维修',
            projectCompany:'富士康',
            projectId:'dsfi123123',
            projectAddr:'广东天赋路903号',
            projectEndDate:'2019-02-15',
            projectNOP:23,
            projectStartDate:'2019-01-16',
            projectStatus:0
        },
        {
            projectName:'电路板维修',
            projectCompany:'富士康',
            projectId:'dsfi123123',
            projectAddr:'广东天赋路903号',
            projectEndDate:'2019-02-15',
            projectNOP:23,
            projectStartDate:'2019-01-16',
            projectStatus:1
        },
        {
            projectName:'电路板维修',
            projectCompany:'富士康',
            projectId:'dsfi123123',
            projectAddr:'广东天赋路903号',
            projectEndDate:'2019-02-15',
            projectNOP:23,
            projectStartDate:'2019-01-16',
            projectStatus:2
        },

    ]

}

export const projectListMockResponse = new HttpResponse({
    status:200,
    body:projectListMock
})

// projectMonthEvent
const mip:MIP[] = [
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
  const mockMemberExchange: MemberExchange = {
    memberJoinIn: [
      {
        staffName: 'jeson',
        staffId:'3f234',
        from:{
          projectName:'新店开发项目',
          projectId:'sdfsdf3234234'
        }
      },
      {
        staffName: 'kifi',
        staffId:'3f23df3',
        from:{
          projectName:'新店开发项目',
          projectId:'sdfsdf3234234'
        }
      }
    ],
    memberLeaveOut:[
      {
        staffName: 'jeson',
        staffId:'3f234',
        to:{
          projectName:'新世纪永中开发项目',
          projectId:'sdfsdf32342123'
        }
      }
    ]
  }
const projectMonthEventMock:ProjectCalendarResType = {
    success:true,
    payload:[
        {
            eventDate:'2018-03-01',
            mostImportantProblem:mip,
            memberExchange:mockMemberExchange
        },
        {
            eventDate:'2018-03-04',
            mostImportantProblem:mip,
            memberExchange:mockMemberExchange
        },
        {
            eventDate:'2018-05-01',
            mostImportantProblem:mip,
            memberExchange:mockMemberExchange
        },
    ]
}
export const projectCalendarMockResponse = new HttpResponse({
    status:200,
    body:projectMonthEventMock
})
