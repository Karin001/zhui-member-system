import { HttpResponse} from '@angular/common/http'
import { ProjectListResType } from '../core/project/project.service';

const projectListMock:ProjectListResType = {
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