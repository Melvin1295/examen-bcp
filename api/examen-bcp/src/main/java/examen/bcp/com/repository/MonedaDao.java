package examen.bcp.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import examen.bcp.com.entitys.Moneda;

@Repository
public interface MonedaDao extends JpaRepository<Moneda, String> {
}