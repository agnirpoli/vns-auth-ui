import { Injectable } from '@angular/core';
import {  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApplicationService } from '../service/application.service';

declare const bootbox: any;

@Injectable({
    providedIn: 'root'
})

export class ServiceInterceptor implements HttpInterceptor {

  

    constructor(private router: Router, private applicationService: ApplicationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log("from interceptor")

        if (req.url.endsWith("generateToken") || req.url.endsWith("unsecure")) {
            return next.handle(req).pipe(
                finalize(() => {
                    // this.loaderService.hide();
                })
            );
        }


        const modifiedRequest = req.clone({
            headers: req.headers.set('Authorization',
                'Bearer ' + JSON.parse(sessionStorage.getItem("token")!)?.jwt)
        });
        return next.handle(modifiedRequest).pipe(
            finalize(() => {

            }),
            catchError(err => {
                console.log("handling Error ", err);
                sessionStorage.clear();
                this.router.navigateByUrl('/');
                return throwError(err);
            })
        )


    }


}