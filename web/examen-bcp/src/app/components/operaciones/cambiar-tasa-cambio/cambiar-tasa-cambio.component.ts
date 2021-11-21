import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';
import { RequestActualizaTasa } from '../../models/request-actualiza-tasa.model';
import { TipoCambioService } from '../../services/tipo-cambio.service';
import { AppState } from '../../store/app.reducers';

import * as actions from 'src/app/components/store/actions';

@Component({
  selector: 'app-cambiar-tasa-cambio',
  templateUrl: './cambiar-tasa-cambio.component.html',
  styleUrls: ['./cambiar-tasa-cambio.component.css']
})
export class CambiarTasaCambioComponent implements OnInit {

  tiposDeCambio: any[];
  display: boolean = false;
  tasa: RequestActualizaTasa;
  monedaOrigen: string;
  monedaDestino: string;

  constructor(private tipoCambioService: TipoCambioService, private store: Store<AppState>) {
    this.tiposDeCambio = [];
    this.tasa = new RequestActualizaTasa(0,0);
    this.monedaDestino = "";
    this.monedaOrigen = "";
  }

  ngOnInit(): void {
    this.store.dispatch(actions.tiposDeCambio());
    this.store.select('tiposDeCambio').subscribe(({ data, loaded, error}) => {
      if(data != null && loaded == true) {
        this.tiposDeCambio = data.data;
      }
    });
    /*this.tipoCambioService.listaTasasCambio().subscribe((data) => {
      if(data != null) {
          this.tiposDeCambio = data.data;
      }
    })*/
  }

  mostrarVentanaEdicion(item: any) {
    this.tasa.id = item.id;
    this.tasa.nuevaTasa = item.tasaCambio;
    this.monedaOrigen= item.monedaOrigen.nombre +'('+item.monedaOrigen.codigoiso+')';
    this.monedaDestino= item.monedaDestino.nombre +'('+item.monedaDestino.codigoiso+')';
    this.display = true;
  }

  cambiarTasaCambio() {
      this.tipoCambioService.actualizaTasaCambio({ ...this.tasa }).subscribe((data) => {
         if(data != null) {
           this.display = false;
           this.store.dispatch(actions.tiposDeCambio());
           Swal.fire('Atención!', 'Tasa actualizada correctamente', 'success');
         }
      })
  }

  cancelar() {
    this.display = false;
    this.tasa = new RequestActualizaTasa(0,0);
    this.monedaDestino = "";
    this.monedaOrigen = "";
  }
}
