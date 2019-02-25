
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {
    identityMockResponse,
    loginMockResponse,
    resetPSMockResponse,
    logoutMockResponse,
    projectListMockResponse
} from '../../mock'

import { environment } from '../../../environments/environment'

const [baseUrl, url] = [environment.baseUrl, environment.url];

const mockResfn = (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
    console.log('here',req.url=== baseUrl + url.projectList ,)
    switch (req.url) {
        case url.identity:
            return of(identityMockResponse)
        case url.login:
            return of(loginMockResponse)
        case  url.resetPassword:
            return of(resetPSMockResponse)
        case url.logout:
            return of(logoutMockResponse)
        case  url.projectList:
   
            return of(projectListMockResponse)
        default:

            return of(identityMockResponse)
    }
}
@Injectable()
export class MockInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('req.url', req.url)
        if (!environment.useMock) {
            return next.handle(req)
        } else {
            console.log('use mock interceptor')
            return mockResfn(req)
        }
    }
}