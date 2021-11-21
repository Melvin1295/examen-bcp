package examen.bcp.com.service;

import examen.bcp.com.entitys.seg.Usuario;

public interface UsuarioService {

	public Usuario findByUsername(String username) throws Exception;
}
