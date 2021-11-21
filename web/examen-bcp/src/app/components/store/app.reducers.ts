import { ActionReducerMap } from '@ngrx/store';

import * as estados from './states/app.states';
import * as reducers from './reducers';

/* Estados para la web */
export interface AppState {
  listaMonedas: estados.recuperarMonedas,
  convertirMoneda: estados.convertirMoneda,
  tiposDeCambio: estados.tiposDeCambio
}

export const appReducers: ActionReducerMap<AppState> = {
  listaMonedas: reducers.listaMonedas,
  convertirMoneda: reducers.convertirMoneda,
  tiposDeCambio: reducers.tiposCambioLista
}
