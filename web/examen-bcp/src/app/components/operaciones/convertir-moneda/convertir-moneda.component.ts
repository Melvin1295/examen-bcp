import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TipoCambioService } from '../../services/tipo-cambio.service';
import { AppState } from '../../store/app.reducers';
import * as actions from 'src/app/components/store/actions';
import { tap } from 'rxjs/operators';
import { RequestConvertirModel } from '../../models/request-convertir.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-convertir-moneda',
  templateUrl: './convertir-moneda.component.html',
  styleUrls: ['./convertir-moneda.component.css']
})
export class ConvertirMonedaComponent implements OnInit {

  listaMonedas: any[] = [];
  convertir: RequestConvertirModel;
  montoConvertido: number;
  resultadoCompleto: string;

  constructor(private tipoCambioService: TipoCambioService, private store: Store<AppState>) {
      this.convertir = new RequestConvertirModel(2,1,0);
      this.montoConvertido = 0;
      this.resultadoCompleto = '';
   }

  ngOnInit(): void {
    //this.store.dispatch(actions.listaMonedas());
    this.tipoCambioService.listaMonedas().subscribe((data) => {
      if(data != null) {
        this.listaMonedas = data.data;
      }
    });
    this.store.select('convertirMoneda').subscribe(({data, loaded, error}) => {
          if(data != null && loaded == true) {
            this.montoConvertido = data.montoConvertido;
            this.resultadoCompleto = JSON.stringify(data);
          }
    });
  }

  convertirMonto() {
    if(this.convertir.monto > 0) {
      if(this.convertir.monedaOrigenId == this.convertir.monedaDestinoId) {
        this.montoConvertido = this.convertir.monto;
      } else {
        let temp = { ...this.convertir};
        this.store.dispatch(actions.convierteMoneda({moneda: temp}));
      }
    }
  }

}
