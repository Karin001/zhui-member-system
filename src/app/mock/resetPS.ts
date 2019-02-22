import { HttpResponse} from '@angular/common/http'
import { ResetPSResType } from '../core/auth/reset-password.service';

const resetPSMock:ResetPSResType = {
    success: true,
    payload: {
       staffName:'朱希文',
       staffId:'123123d3',
       identity:'admin'
    }
}

export const resetPSMockResponse = new HttpResponse({
    status:200,
    body:resetPSMock
})