package examen.bcp.com.entitys;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "moneda")
@Setter
@Getter
@AllArgsConstructor
public class Moneda implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "nombre", nullable = false)
	private String nombre;

	@Column(name = "codigoiso", nullable = false)
	private String codigoIso;

	@Column(name = "simbolo", nullable = false)
	private String simbolo;

	@Column(name = "estado", nullable = false)
	private String estado;

	@Column(name = "terminal", nullable = false)
	private String terminal;

	@Column(name = "usuario", nullable = false)
	private Integer usuario;

	@OneToMany(mappedBy = "monedaOrigen", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TipoCambio> tipoCambios;

	@OneToMany(mappedBy = "monedaDestino", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TipoCambio> tipoCambiosDestino;

	public Moneda() {
		super();
	}
}
