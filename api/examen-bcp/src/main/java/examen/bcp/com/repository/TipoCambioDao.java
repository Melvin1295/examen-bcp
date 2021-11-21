package examen.bcp.com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import examen.bcp.com.entitys.TipoCambio;

@Repository
public interface TipoCambioDao  extends JpaRepository<TipoCambio, String> {
	
	@Query("SELECT t FROM TipoCambio t WHERE t.monedaOrigen.id = :monedaOrigenId AND t.monedaDestino.id = :monedaDestinoId AND t.estado = '1' ")
	public Optional<TipoCambio> recuperaTipoCambio(@Param("monedaOrigenId") long monedaOrigenId, @Param("monedaDestinoId") long monedaDestinoId);
	
	@Query("SELECT t FROM TipoCambio t WHERE t.id = :id ")
	public Optional<TipoCambio> findById(@Param("id") long id);
}
