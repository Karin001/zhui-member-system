
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {
    identityMockResponse,
    loginMockResponse,
    resetPSMockResponse,
    logoutMockResponse
} from '../../mock'

import { environment } from '../../../environments/environment'

const [baseUrl, url] = [environment.baseUrl, environment.url];

const mockResfn = (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
    switch (req.url) {
        case baseUrl + url.identity:
            return of(identityMockResponse)
        case baseUrl + url.login:
            return of(loginMockResponse)
        case baseUrl + url.resetPassword:
            return of(resetPSMockResponse)
        case baseUrl + url.logout:
            return of(logoutMockResponse)
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