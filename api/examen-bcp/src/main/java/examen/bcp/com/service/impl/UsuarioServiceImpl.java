package examen.bcp.com.service.impl;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import examen.bcp.com.entitys.seg.Usuario;
import examen.bcp.com.repository.UsuarioDao;
import examen.bcp.com.service.UsuarioService;

@Service("usuarioService")
@Transactional
public class UsuarioServiceImpl implements UserDetailsService, UsuarioService, Serializable {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private UsuarioDao usuarioDao;

	@Override
	public Usuario findByUsername(String username) throws Exception {
		return usuarioDao.obtenerPorUsername(username);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		try {
			Usuario usuario = usuarioDao.obtenerPorUsername(username);
			if (usuario.getUsername() == null || usuario.getPassword() == null) {				
				throw new UsernameNotFoundException("Error en el login, no existe el usuario '" + usuario.getUsername() + "' en el sistema");
			}

			List<GrantedAuthority> authorities = usuario.getRoles().stream()
					.map(role -> new SimpleGrantedAuthority(role.getNombre()))
					.peek(authority -> System.out.println("Role: " + authority.getAuthority()))
					.collect(Collectors.toList());
			return new User(usuario.getUsername(), usuario.getPassword(), true, true, true, true, authorities);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}	
}
