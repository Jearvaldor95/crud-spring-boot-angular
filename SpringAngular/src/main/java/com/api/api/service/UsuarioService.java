
package com.api.api.service;

import com.api.api.model.Usuario;
import java.util.List;

/**
 *
 * @author USUARIO
 */
public interface UsuarioService {
    
    public List<Usuario> listar();
    
    public Usuario listarId(Integer id);
    
    public Usuario guardar(Usuario u);
    
    public Usuario actualizar(Integer id);
    
    public void eliminar(Integer id);
    
}
