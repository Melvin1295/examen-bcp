package examen.bcp.com.jwt;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.stereotype.Component;

import examen.bcp.com.entitys.seg.Usuario;
import examen.bcp.com.service.UsuarioService;

@Component
public class AgregarInformacionJwt implements TokenEnhancer{

	private static final Logger logger = LoggerFactory.getLogger(AgregarInformacionJwt.class);
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Override
	public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {		
		Map<String, Object> info = new HashMap<String, Object>();		
		Usuario usuario;
		try {	
			usuario = usuarioService.findByUsername(authentication.getName());
			info.put("nombre", usuario.getNombre());
			info.put("apellido", usuario.getApellido());
			info.put("correo", usuario.getEmail());
			logger.info("Usuario autenticado :{}", usuario.getUsername());
			((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);	
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Error al recuperar data de usuario: {}",  e.getMessage());
		}			
		return accessToken;
	}

	
}