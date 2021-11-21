import * as states from './app.states';

export const listaMonedas: states.recuperarMonedas = {
  data: [],
  loaded: false,
  loading: false,
  error: null
};

export const convertirMonedaInit: states.convertirMoneda = {
  data: null,
  loaded: false,
  loading: false,
  error: null
};

export const tiposDeCambioInit: states.tiposDeCambio = {
  data: null,
  loaded: false,
  loading: false,
  error: null
};
