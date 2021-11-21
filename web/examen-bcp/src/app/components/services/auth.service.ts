import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { catchError, map } from 'rxjs/operators';
import { throwError } from "rxjs";
import Swal from "sweetalert2";
import { LoginModel, ResponseTokenModel } from "../models/login.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public readonly JWT_TOKEN = 'JWT_TOKEN_CS';
    public readonly USUARIO = 'DATOS_USUARIO';

    constructor(private httpClient: HttpClient){}

    recuperarTokenAutorization (login: LoginModel) {
        const payload = new HttpParams()
        .set('username', login.username)
        .set('password', login.password)
        .set('grant_type', 'password');
        return  this.httpClient.post(`${ environment.urlApi }oauth/token`,  payload, {
          headers: new HttpHeaders({
                       'Authorization': environment.basicAuth ,
                       'Content-Type': 'application/x-www-form-urlencoded'
                     }),
          responseType: "json"
          }).pipe(
          map((result:any) => result),
          catchError(err => {
            Swal.fire('Atención!', 'Servicio REST no está activado, por favor consultar el administrador.', 'info');
            return throwError(err);
          })
        );
    }

    setToken(token: any) {
        localStorage.setItem(this.JWT_TOKEN, token)
    }

    getToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }

    removeToken() {
        return localStorage.removeItem(this.JWT_TOKEN);
    }

    setUsuario(usuario: ResponseTokenModel) {
        localStorage.setItem(this.USUARIO, JSON.stringify(usuario))
    }

    getUsuario(): ResponseTokenModel {
      if(localStorage.getItem(this.USUARIO) != undefined) {
         let usu = new ResponseTokenModel('','','',0,'','','','','');
         usu = JSON.parse(''+localStorage.getItem(this.USUARIO));
         return usu;
      } else {
        return new ResponseTokenModel('','','',0,'','','','','');
      }
    }

    removeUsuario() {
        return localStorage.removeItem(this.USUARIO);
    }

    logoutSession() {
        localStorage.clear();
    }
}
