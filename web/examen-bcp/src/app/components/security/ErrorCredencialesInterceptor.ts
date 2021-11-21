import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Interceptor de codigos de inautorización HTTP
 * @author Madiazr
 * @date 18/01/2021
 */
@Injectable()
export class ErrorCredencialesInterceptor implements HttpInterceptor {

    constructor(private router: Router, public authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ((err.status === 401 || err.status === 403) && !request.url.endsWith('api/authenticate') ) {
                console.log("Error no tiene permisos suficientes..")

                this.router.navigate(['/login']);
            }
            return throwError(err);
        }));
    }




}
