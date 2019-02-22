
import { HttpResponse} from '@angular/common/http'
import { LoginResType } from '../core/auth/login.service';

const loginMock:LoginResType = {
    success: true,
    payload: {
       staffName:'朱希文',
       staffId:'123123d3',
       identity:'admin'
    }
}

export const loginMockResponse = new HttpResponse({
    status:200,
    body:loginMock
})