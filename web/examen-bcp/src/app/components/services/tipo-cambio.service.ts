import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { RequestActualizaTasa } from "../models/request-actualiza-tasa.model";
import { RequestConvertirModel } from "../models/request-convertir.model";

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  constructor(private httpClient: HttpClient){}

  public consultarMonedas() {
    return  this.httpClient.get(`${ environment.urlApi }monedas`).pipe(
      map((result:any) => result),
      catchError(err => {
        Swal.fire('Atención!', 'Servicio REST no está activado, por favor consultar el administrador.', 'info');
        return throwError(err);
      })
    );
  }

  public listaMonedas() {
    return this.httpClient.get<any>(`${ environment.urlApi }monedas`).pipe(
      map((result:any) => result),
      catchError(err => {
        Swal.fire('Atención!', 'Servicio REST no está activado, por favor consultar el administrador.', 'info');
        return throwError(err);
      })
    );
  }

  public convertirMoneda(cambio: RequestConvertirModel) {
    return this.httpClient.post<any>(`${ environment.urlApi }convertirMoneda`, cambio).pipe(
      map((result:any) => result),
      catchError(err => {
        Swal.fire('Atención!', 'Servicio REST no está activado, por favor consultar el administrador.', 'info');
        return throwError(err);
      })
    );
  }

  public listaTasasCambio() {
    return  this.httpClient.get(`${ environment.urlApi }tiposDeCambio`).pipe(
      map((result:any) => result),
      catchError(err => {
        Swal.fire('Atención!', 'Servicio REST no está activado, por favor consultar el administrador.', 'info');
        return throwError(err);
      })
    );
  }

  public actualizaTasaCambio(tasa: RequestActualizaTasa) {
    return  this.httpClient.put(`${ environment.urlApi }actualizarTasaCambio/${tasa.id}`, tasa).pipe(
      map((result:any) => result),
      catchError(err => {
        Swal.fire('Atención!', 'Servicio REST no está activado, por favor consultar el administrador.', 'info');
        return throwError(err);
      })
    );
  }
}
