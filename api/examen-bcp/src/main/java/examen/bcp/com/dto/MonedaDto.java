package examen.bcp.com.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
@AllArgsConstructor
public class MonedaDto implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private long id;	
	private String nombre;	
	private String codigoiso;	
	private String simbolo;	
	private String estado;
}
