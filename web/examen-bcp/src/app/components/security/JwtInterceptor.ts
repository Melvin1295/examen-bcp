import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

/**
 * Interceptor para agregar token y otros párametros en peticiones HTPP a las APIS
 * @author Madiazr
 * @date 18/01/2021
 */
@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authService.getToken();
      //  let tokenAdmin = this.authService.getTokenAdmin();
        if (token != undefined && token != null) {
            if(req.url != `${ environment.urlApi }oauth/token`){
                req = req.clone({
                    setHeaders: {
                        'Content-Type':  'application/json',
                        'Access-Control-Allow-Origin': '*',
                         Authorization: `Bearer ${ token }`
                    }
                });
            }
        } else {
            console.log("No hay Token");
        }
        return next.handle(req);
    }
  }
