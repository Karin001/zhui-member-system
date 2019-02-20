import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Observable, timer, zip, range } from 'rxjs';
import { catchError, retryWhen, map, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'
import {environment} from '../../../environments/environment'
const error_config = environment.errorHandle
// import {backoff} from '../../utils/backoff'

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retryWhen(attempts => zip(range(1, 3 + 1), attempts)
                .pipe(
                    map(([i, err]) => {
                        if (i === 3 + 1) {
                            throw err;
                        }
                        return i * i
                    }),
                    mergeMap(i => {

                        return timer(i * 250)
                    })
                )
            ),
            catchError((error: HttpErrorResponse) => {
                //console.log('errrrrrrrrrrrrrrr',error)
                if (error.error instanceof ErrorEvent) {
                    // A client-side or network error occurred. Handle it accordingly.
                    console.error('An error occurred:', error.error.message);
                } else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.error(
                        `Backend returned code ${error.status}, ` +
                        `body was: ${JSON.stringify(error.error)}`);
                }
                const errorInfo = error_config.getErrorInfo(error)
                let mockRes;
                if(errorInfo && error_config.errorDeCode[errorInfo]) {
                    mockRes = new HttpResponse({ body: { errorInfo:errorInfo, success: false, errorHint:error_config.errorDeCode[errorInfo] } });
                } else{
                    mockRes = new HttpResponse({ body: { errorInfo:'other error', success: false, errorHint:error_config.otherErrorInfo } });
                }
                
                return of(mockRes)
            })
        )
    }
}