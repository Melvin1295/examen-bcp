package examen.bcp.com.apis;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import examen.bcp.com.dto.GlobalResponseDto;
import examen.bcp.com.dto.MonedaDto;
import examen.bcp.com.dto.RequestConvertirMonedaDto;
import examen.bcp.com.dto.RequestTipoCambioDto;
import examen.bcp.com.dto.ResponseConvertirMonedaDto;
import examen.bcp.com.dto.TipoCambioDto;
import examen.bcp.com.service.GestionMonedaService;
import io.reactivex.Single;
import io.reactivex.schedulers.Schedulers;

@RestController
public class GestionCambioApi implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private GestionMonedaService gestionMonedaService;

	@RequestMapping(value = "monedas", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Single<ResponseEntity<GlobalResponseDto<List<MonedaDto>>>> listaMonedas() {
		 return gestionMonedaService.getAllMonedas()
	                .subscribeOn(Schedulers.io())
	                .map(listaMonedasResponse -> ResponseEntity.ok(GlobalResponseDto.successWithData(listaMonedasResponse)));
		/*return gestionMonedaService.getAllMonedas().subscribeOn(Schedulers.io())
				.map(monedaResponses -> ResponseEntity.ok(monedaResponses));*/
	}
	
	

	@RequestMapping(value = "tiposDeCambio", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Single<ResponseEntity<GlobalResponseDto<List<TipoCambioDto>>>> listaTiposDeCambios() {
		 return gestionMonedaService.getAllTiposCambio()
	                .subscribeOn(Schedulers.io())
	                .map(tiposCambio -> ResponseEntity.ok(GlobalResponseDto.successWithData(tiposCambio)));
	}

	@RequestMapping(value = "convertirMoneda", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Single<ResponseEntity<ResponseConvertirMonedaDto>> convertirMoneda(@RequestBody RequestConvertirMonedaDto data) {
		return gestionMonedaService.convertirMoneda(data).subscribeOn(Schedulers.io())
				.map(conversion -> ResponseEntity.ok(conversion));
	}

	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "actualizarTasaCambio/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Single<ResponseEntity<GlobalResponseDto>> actualizarTasaDeCambio(@PathVariable(value = "id") long id, @RequestBody RequestTipoCambioDto data) {
		return gestionMonedaService.actualizarTipoCambio(data, id).subscribeOn(Schedulers.io())
				.toSingle(() -> ResponseEntity.ok(GlobalResponseDto.successNoData()));
	}
}
