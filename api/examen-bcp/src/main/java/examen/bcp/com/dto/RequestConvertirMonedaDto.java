package examen.bcp.com.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import org.springframework.validation.annotation.Validated;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
@AllArgsConstructor
@Validated
public class RequestConvertirMonedaDto implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long monedaOrigenId;
	private long monedaDestinoId;
	private BigDecimal monto;
}
