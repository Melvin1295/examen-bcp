package examen.bcp.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import examen.bcp.com.entitys.seg.Usuario;

@Repository
public interface UsuarioDao extends JpaRepository<Usuario, Long>{
	
	@Query("select u from Usuario u where u.username= :username")
	public Usuario obtenerPorUsername(@Param("username") String username);
}