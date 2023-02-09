import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  //creamos un nuevo usuaro vacio
  usuario: Usuario = new Usuario();
  constructor(private usaurioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  //este metodo es llamado desde el formulario 
    //se encarga de disparar el metodo de guardar usuario
    enviarFormulario(){
      this.guardarUsuario();
    }

  //este metodo llama al guardarUsuario  de usuarioService
  guardarUsuario(){
    this.usaurioService.guardarUsuario(this.usuario).subscribe(datoUsuario=>{
      console.log(datoUsuario);
      //Mensaje de confimacion de registro
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario creado con éxito',
        showConfirmButton: false,
        timer: 1500
      });
      //llamamos al metodo de redireccion para volver a la lista de usuarios
      this.redireccionarListaUsuario();

    }, error => console.log(error));
  }

  //redireccion a la lista de usuarios
  redireccionarListaUsuario(){
    this.router.navigate(['/listarUsuario']);
  }

}
