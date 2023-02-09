import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  id!: number;
  //ActivedRoute proporciona acceso a informacion sobre una ruta asociada a un componente
  constructor(private usuarioService: UsuarioService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //recogemos el ID que nos llega en la url desde el formulario
    this.id=this.activateRoute.snapshot.params['id'];

    //utilizamos el metodo de usuarioService para obtener el usuario
    this.usuarioService.listarUsuarioId(this.id).subscribe(usuario=>{
      this.usuario = usuario;
    }, error => console.log(error));
  }

  //Metodo referenciado por el formulario HTML
  enviarFormulario(){
    this.usuarioService.actualizarUsuario(this.id,this.usuario).subscribe(datoUsuario => {
      console.log(datoUsuario);
      //Mensaje de confirmacion
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Usuario actualizado con éxito',
      showConfirmButton: false,
      timer: 1500
    });
      //Una vez se actualizan los datos se redirige a la lista de usuarios
      this.redireccionarListaUsuario();
    }, error => console.log(error));
  }

  //redireccionamos a la lista de usuarios
  redireccionarListaUsuario(){
    this.router.navigate(['/listarUsuario']);
  }

}
