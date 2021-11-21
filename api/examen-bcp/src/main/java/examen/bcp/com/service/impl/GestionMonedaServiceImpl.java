package examen.bcp.com.service.impl;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import examen.bcp.com.dto.MonedaDto;
import examen.bcp.com.dto.RequestConvertirMonedaDto;
import examen.bcp.com.dto.RequestTipoCambioDto;
import examen.bcp.com.dto.ResponseConvertirMonedaDto;
import examen.bcp.com.dto.TipoCambioDto;
import examen.bcp.com.entitys.Moneda;
import examen.bcp.com.entitys.TipoCambio;
import examen.bcp.com.repository.MonedaDao;
import examen.bcp.com.repository.TipoCambioDao;
import examen.bcp.com.service.GestionMonedaService;
import io.reactivex.Completable;
import io.reactivex.Single;

@Service
public class GestionMonedaServiceImpl implements GestionMonedaService, Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private MonedaDao monedaDao;
	
	@Autowired
	private TipoCambioDao tipoCambioDao;

	@Override
	public Single<List<MonedaDto>> getAllMonedas() {
		return recuperaTodosLosTiposMonedas().map(this::toMonedaResponseList);
	}
  
	/* Recupera lista de monedas de BD */
	private Single<List<Moneda>> recuperaTodosLosTiposMonedas() {
		return Single.create(subs -> {
			List<Moneda> monedas = monedaDao.findAll();
			subs.onSuccess(monedas);
		});
	}

	/* Itera lista de monedas */
	private List<MonedaDto> toMonedaResponseList(List<Moneda> monedas) {
		return monedas.stream().map(this::toMonedaResponse).collect(Collectors.toList());
	}

	/* Parse entity to dto  monedas*/
	private MonedaDto toMonedaResponse(Moneda moneda) {
		MonedaDto monedaRes = new MonedaDto(moneda.getId(), moneda.getNombre(), moneda.getCodigoIso(), moneda.getSimbolo(), moneda.getEstado());
		return monedaRes;
	}
	
	@Override
	public Single<List<TipoCambioDto>> getAllTiposCambio() {
		return recuperarTiposDeMoneda().map(this::toTipoCambioResponseList);
	}
	
	/* Recupera lista de monedas de BD */
	private Single<List<TipoCambio>> recuperarTiposDeMoneda() {
		return Single.create(subs -> {
			List<TipoCambio> monedas = tipoCambioDao.findAll();
			subs.onSuccess(monedas);
		});
	}

	/* Itera lista de monedas */
	private List<TipoCambioDto> toTipoCambioResponseList(List<TipoCambio> tipoCambioList) {
		return tipoCambioList.stream().map(this::toTipoCambioResponse).collect(Collectors.toList());
	}

	/* Parse entity to dto  monedas*/
	private TipoCambioDto toTipoCambioResponse(TipoCambio tipoCambio) {
		Moneda moneda = tipoCambio.getMonedaOrigen();
		Moneda monedaFin = tipoCambio.getMonedaDestino();
		MonedaDto monedaOrigen = new MonedaDto(moneda.getId(), moneda.getNombre(), moneda.getCodigoIso(), moneda.getSimbolo(), moneda.getEstado());
		MonedaDto monedaDestino = new MonedaDto(monedaFin.getId(), monedaFin.getNombre(), monedaFin.getCodigoIso(), monedaFin.getSimbolo(), monedaFin.getEstado());
		TipoCambioDto tipoCambioDto = new TipoCambioDto(tipoCambio.getId(), monedaOrigen, monedaDestino, tipoCambio.getTasaCambio());
		return tipoCambioDto;
	}
	
	@Override
	public Single<ResponseConvertirMonedaDto> convertirMoneda(RequestConvertirMonedaDto data) {
		return recuperaTipoCambio(data);
	}
	
	/* Recupera tipo de cambio de BD */
	private Single<ResponseConvertirMonedaDto> recuperaTipoCambio(RequestConvertirMonedaDto data) {
		return Single.create(singleSubscriber -> {
            Optional<TipoCambio> optionalTipoCambio = tipoCambioDao.recuperaTipoCambio(data.getMonedaOrigenId(), data.getMonedaDestinoId());
            if (!optionalTipoCambio.isPresent())
                singleSubscriber.onError(new EntityNotFoundException());
            else {
            	ResponseConvertirMonedaDto resConvierteMoneda = toCambioConvertidoResponse(optionalTipoCambio.get(), data.getMonto());
                singleSubscriber.onSuccess(resConvierteMoneda);
            }
        });
	}
	
	private ResponseConvertirMonedaDto toCambioConvertidoResponse(TipoCambio tipoCambio, BigDecimal monto) {
		BigDecimal montoConvertido = monto.multiply(tipoCambio.getTasaCambio()).setScale(2, RoundingMode.HALF_UP);
		ResponseConvertirMonedaDto resTipoCambio = new ResponseConvertirMonedaDto(monto, montoConvertido,tipoCambio.getMonedaOrigen().getNombre(), 
				tipoCambio.getMonedaDestino().getNombre(), tipoCambio.getTasaCambio());        
        return resTipoCambio;
    }
	
	
	/* Actualiza tasa de cambio en BD */
	@Override
    public Completable actualizarTipoCambio(RequestTipoCambioDto tipoCambio, long id) {
        return actualizarTipoDeCambioEnRepository(tipoCambio, id);
    }

    private Completable actualizarTipoDeCambioEnRepository(RequestTipoCambioDto tipoCambio, long id) {
        return Completable.create(completableSubscriber -> {
            Optional<TipoCambio> optionalTipoCambio = tipoCambioDao.findById(id);
            if (!optionalTipoCambio.isPresent())
                completableSubscriber.onError(new EntityNotFoundException());
            else {
                TipoCambio tipoCambioFinal = optionalTipoCambio.get();
                tipoCambioFinal.setTasaCambio(tipoCambio.getNuevaTasa());
                tipoCambioDao.save(tipoCambioFinal);
                completableSubscriber.onComplete();
            }
        });
    }

}