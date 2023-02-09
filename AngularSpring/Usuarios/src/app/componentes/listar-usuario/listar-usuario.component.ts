import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from '../../usuario.service';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  //variable que ira en el input de busqueda por medio de [(ngModel)] para regoger el filtro Pipe 
  filtroUsuarios = '';
  //Inicializamos las paginas en 1, para la paginación
  paginas: number = 1;
  totalItems: number= 0;
  usuarios: Usuario[] = [];

  //inyectamos el UsuarioService 
  constructor(private usuarioServices: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.listarUsuario();
    
  }
  private listarUsuario(){
    //utilizamos el servicio inyectado para encontrar los usuarios
    this.usuarioServices.listaUsuario().subscribe(
      datosUsuario =>{this.usuarios = datosUsuario}
    );
  }

  actualizarUsuario(id: number){
    //lo envia a traves de app.routing.ts
    this.router.navigate(['actualizarUsuario',id]);
  }

  eliminarUsuario(id: number){
    Swal.fire({
      title: 'Estás Seguro?',
      text: "Quieres eliminar el usuario! "+id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar!'
    }).then((result) => {

      if (result.isConfirmed) {
        this.usuarioServices.eliminarUsuario(id).subscribe(datosUsuario=>{
          console.log(datosUsuario);
          //volvemos a recuperar los usuarios tras borrarlos
          this.listarUsuario();
        });

        Swal.fire(
          'Eliminado!',
          'Usuario eliminado con éxito.',
          'success'
        )
      }
    })
    
  }

  paginacion(event: number){
    this.paginas = event;
    this.listarUsuario();
  }

}

