/**
 * Manejador de acciones para analizar el tipo de accion realizada por el usuario
 * @Arquitectura REDUX
 */
 import { createReducer, on } from "@ngrx/store";
 import * as acciones from '../actions';
 import * as estados from '../states'

 /**
  * Manejador de acciones para recuperar lista de monedas
  */
 const _listaMonedas = createReducer(estados.listaMonedas,
     on(acciones.listaMonedas, state => ({
         ...state,
         loading: true,
         loaded: false,
         data: [],
         error: null })),
     on(acciones.listaMonedasSuccess, (state, {  data }) => ({
         ...state,
         loading: false,
         loaded: true,
         error: null,
         data: [ ...data ]
     })),
     on(acciones.listaMonedasError, (state, { error }) => ({
         ...state,
         loading: false,
         loaded: false,
         data: [],
         error: { ...error }
     }))
 );

 export function listaMonedas(state:any, action:any) {
     return _listaMonedas(state, action);
 }

  /**
  * Manejador de acciones para convertir monedas
  */
   const _convertirMoneda = createReducer(estados.convertirMonedaInit,
    on(acciones.convierteMoneda, state => ({
        ...state,
        loading: true,
        loaded: false,
        data: null,
        error: null })),
    on(acciones.convierteMonedaSuccess, (state, {  data }) => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        data: { ...data }
    })),
    on(acciones.convierteMonedaError, (state, { error }) => ({
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: { ...error }
    }))
);

export function convertirMoneda(state:any, action:any) {
    return _convertirMoneda(state, action);
}

/**
  * Manejador de acciones para listar tipos de cmabio
  */
 const _tiposCambioLista = createReducer(estados.tiposDeCambioInit,
  on(acciones.tiposDeCambio, state => ({
      ...state,
      loading: true,
      loaded: false,
      data: null,
      error: null })),
  on(acciones.tiposDeCambioSuccess, (state, {  data }) => ({
      ...state,
      loading: false,
      loaded: true,
      error: null,
      data: { ...data }
  })),
  on(acciones.tiposDeCambioError, (state, { error }) => ({
      ...state,
      loading: false,
      loaded: false,
      data: null,
      error: { ...error }
  }))
);

export function tiposCambioLista(state:any, action:any) {
  return _tiposCambioLista(state, action);
}

