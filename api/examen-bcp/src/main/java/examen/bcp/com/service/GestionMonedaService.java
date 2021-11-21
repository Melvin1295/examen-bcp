package examen.bcp.com.service;

import java.util.List;

import examen.bcp.com.dto.MonedaDto;
import examen.bcp.com.dto.RequestConvertirMonedaDto;
import examen.bcp.com.dto.RequestTipoCambioDto;
import examen.bcp.com.dto.ResponseConvertirMonedaDto;
import examen.bcp.com.dto.TipoCambioDto;
import io.reactivex.Completable;
import io.reactivex.Single;

public interface GestionMonedaService {

	public Single<List<MonedaDto>> getAllMonedas();
	
	public Single<List<TipoCambioDto>> getAllTiposCambio();
	
	public Single<ResponseConvertirMonedaDto> convertirMoneda(RequestConvertirMonedaDto data);
	
	public Completable actualizarTipoCambio(RequestTipoCambioDto tipoCambio, long id);
}
