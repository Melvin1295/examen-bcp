/* Modelo base de manejor de estados */
export interface BaseState{
  loaded : boolean, /* Párametro que infica procesado */
  loading: boolean, /* Párametro que indica procesando */
  error  : any /* Párametro para indicar el posible error */
}

export interface recuperarMonedas extends BaseState {
  data: any[]
}

export interface convertirMoneda extends BaseState {
  data: any
}

export interface tiposDeCambio extends BaseState {
  data: any
}
