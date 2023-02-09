package com.api.api.controller;

import com.api.api.model.Usuario;
import com.api.api.service.UsuarioService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author USUARIO
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("apiUsuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    //Obtener todo los registros
    @GetMapping("/usuario")
    public List<Usuario> listar() {
        return usuarioService.listar();
    }

    //Listar usuario por ID
    //@PathVariable: Anotacion que indica que un parametro de metodo debe vincularse a una variable de plantilla URI
    @GetMapping("/usuario/{id}")
    public ResponseEntity<?> listarId(@PathVariable Integer id, Usuario u) {
        //Usuario u = null;
        Map<String, Object> response = new HashMap<>();
        try {
            u = usuarioService.listarId(id);
        } catch (DataAccessException e) {
            response.put("Mensaje", "Error al realizar la consulta");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity <>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (u == null) {
            response.put("Mensaje", "El usuario con ID ".concat(id.toString().concat(" no existe en la base de datos!")));
            return new ResponseEntity <>(response, HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Usuario>(u, HttpStatus.OK);
    }

    //Guardar usuario
    @PostMapping("/usuario")
    public ResponseEntity<?> guardar(@RequestBody Usuario u) {

        Map<String, Object> response = new HashMap();
        try {
            u = usuarioService.guardar(u);
        } catch (DataAccessException e) {
            response.put("Mensaje", "Error al insertar el usuario");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("Mensaje", "Usuario Guardado con éxito");
        response.put("usuario", u);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    //Actualizar Usuario 
    @PutMapping("/usuario/{id}")
    public ResponseEntity<?> actualizar(@RequestBody Usuario u, @PathVariable Integer id) {

        //Obetnemos el usuario actual a modificar
        Usuario uActual = usuarioService.actualizar(id);

        Map<String, Object> response = new HashMap();
        if (uActual == null) {
            response.put("Mensaje", "No se puede editar el usuario con ID "
                    .concat(id.toString().concat(" no existe en la base de datos!")));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        try {
            //Modificamos los datos del usuario
            uActual.setUsuario(u.getUsuario());
            uActual.setNacionalidad(u.getNacionalidad());
            uActual.setEmail(u.getEmail());
            //Guardamos los nuevos datos del usuario
            u = usuarioService.guardar(uActual);
        } catch (DataAccessException e) {
            response.put("Mensaje", "Error al actualizar el usuario!");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

        }
        response.put("Mensaje", "Usuario actualizado con éxito!");
        response.put("usuario", u);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    //Eliminar usuario
    @DeleteMapping("/usuario/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Integer id) {
        Map<String, Object> response = new HashMap();
        try {
            usuarioService.eliminar(id);
        } catch (DataAccessException e) {
            response.put("Mensaje", "Error al eliminar el usuario");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        response.put("Mensaje", "Usuaio eliminado con éxito!");
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

}
