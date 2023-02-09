
package com.api.api.service;

import com.api.api.model.Usuario;
import com.api.api.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author USUARIO
 */
@Service
public class UsuarioServiceImple implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioReposiatory;
    
    @Override
    public List<Usuario> listar() {
        return usuarioReposiatory.findAll();
    }

    @Override
    public Usuario listarId(Integer id) {
        return usuarioReposiatory.findById(id).orElse(null);
    }

    @Override
    public Usuario guardar(Usuario u) {
        return usuarioReposiatory.save(u);
    }

    @Override
    public Usuario actualizar(Integer id) {
       return usuarioReposiatory.findById(id).orElse(null);
    }

    @Override
    public void eliminar(Integer id) {
        usuarioReposiatory.deleteById(id);
    }
    
}
