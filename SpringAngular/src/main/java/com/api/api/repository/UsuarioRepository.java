
package com.api.api.repository;

import com.api.api.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author USUARIO
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
    
}
