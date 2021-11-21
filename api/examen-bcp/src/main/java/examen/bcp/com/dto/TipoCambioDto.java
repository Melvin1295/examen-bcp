package examen.bcp.com.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
@AllArgsConstructor
public class TipoCambioDto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private long id;
	private MonedaDto monedaOrigen;
	private MonedaDto monedaDestino;
	private BigDecimal tasaCambio;

}
