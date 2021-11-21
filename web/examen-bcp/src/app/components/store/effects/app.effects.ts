import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TipoCambioService } from "../../services/tipo-cambio.service";
import * as acciones from '../actions';


/**
 * Archivo TS para registrar métodes de efectos para autorización
 * @author Madiazr
 * @Date 18/01/2021
 */
@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private tipoCambioService: TipoCambioService
    ){}

    listaMonedas$ = createEffect(() => this.actions$.pipe(
       ofType(acciones.listaMonedas),
       mergeMap(
            (param) => this.tipoCambioService.consultarMonedas().pipe( /* Ejecuta método del servicio */
                map(result => acciones.listaMonedasSuccess({ data: result })), /* Si operacion esta OK */
                catchError(error => of(acciones.listaMonedasError({ error: error }))) /* Si operación error */
            )
        )
    ));

    convertirMoneda$ = createEffect(() => this.actions$.pipe(
        ofType(acciones.convierteMoneda),
        mergeMap(
            (param) => this.tipoCambioService.convertirMoneda(param.moneda).pipe( /* Ejecuta método del servicio */
                map(result => acciones.convierteMonedaSuccess({ data: result })), /* Si operacion esta OK */
                catchError(error => of(acciones.convierteMonedaError({ error: error }))) /* Si operación error */
            )
        )
    ));

    tiposDeCambio$ = createEffect(() => this.actions$.pipe(
        ofType(acciones.tiposDeCambio),
        mergeMap(
            (param) => this.tipoCambioService.listaTasasCambio().pipe( /* Ejecuta método del servicio */
                map(result => acciones.tiposDeCambioSuccess({ data: result })), /* Si operacion esta OK */
                catchError(error => of(acciones.tiposDeCambioError({ error: error }))) /* Si operación error */
            )
        )
    ));
}
