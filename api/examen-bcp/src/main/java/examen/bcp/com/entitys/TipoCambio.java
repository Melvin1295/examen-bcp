package examen.bcp.com.entitys;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tipocambio")
@Setter
@Getter
@AllArgsConstructor
public class TipoCambio implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "tasacambio", nullable = false)
	private BigDecimal tasaCambio;

	@Column(name = "estado", nullable = false)
	private String estado;

	@Column(name = "terminal", nullable = false)
	private String terminal;

	@Column(name = "usuario", nullable = false)
	private Integer usuario;

	@ManyToOne()
	@JoinColumn(name = "monedaorigen")
	private Moneda monedaOrigen;

	@ManyToOne()
	@JoinColumn(name = "monedadestino")
	private Moneda monedaDestino;

	public TipoCambio() {
		super();
	}

}
