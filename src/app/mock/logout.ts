import { HttpResponse} from '@angular/common/http'
import { LogoutResType } from '../core/auth/logout.service';

const logoutMock:LogoutResType = {
    success: true,
}

export const logoutMockResponse = new HttpResponse({
    status:200,
    body:logoutMock
})