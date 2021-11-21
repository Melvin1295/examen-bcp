import { createAction, props } from "@ngrx/store";
import { RequestConvertirModel } from "../../models/request-convertir.model";

/**
 * Acciones para listar monedas
 */
 export const listaMonedas = createAction(
  '[OperacionComponent] RECUPERA LISTA DE MONEDAS'
);

export const listaMonedasSuccess = createAction(
 '[OperacionComponent] RECUPERA LISTA DE MONEDAS SUCCES',
  props<{ data: any[] }>()
);

export const listaMonedasError = createAction(
  '[OperacionComponent] RECUPERA LISTA DE MONEDAS ERROR',
  props<{ error: any }>()
);

/**
 * Acciones para convertir moneda
 */
 export const convierteMoneda = createAction(
  '[OperacionComponent] CONVERTIR MONEDA',
  props<{moneda: RequestConvertirModel}>()
);

export const convierteMonedaSuccess = createAction(
 '[OperacionComponent] CONVERTIR MONEDA SUCCES',
  props<{ data: any }>()
);

export const convierteMonedaError = createAction(
  '[OperacionComponent] CONVERTIR MONEDA ERROR',
  props<{ error: any }>()
);

/**
 * Acciones litar tipos de cambio
 */
 export const tiposDeCambio = createAction(
  '[OperacionComponent] TIPOS DE CAMBIO'
);

export const tiposDeCambioSuccess = createAction(
 '[OperacionComponent] TIPOS DE CAMBIO SUCCES',
  props<{ data: any }>()
);

export const tiposDeCambioError = createAction(
  '[OperacionComponent] TIPOS DE CAMBIO ERROR',
  props<{ error: any }>()
);
