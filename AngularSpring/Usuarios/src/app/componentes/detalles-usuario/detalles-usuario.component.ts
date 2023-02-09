import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {

  usuario!: Usuario;
  id!: number;
  constructor(private usuarioService: UsuarioService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //Recogemos el id del formulario desde laID
    this.id = this.activatedRoute.snapshot.params['id'];
    this.usuario = new Usuario();
    this.usuarioService.listarUsuarioId(this.id).subscribe(datos =>{
      if(datos){
        this.usuario = datos;
      }else{
        Swal.fire('El usuario con ID: '+this.id+ " no existe");
        window.open('/listarUsuario','_self');
      }
      
    });
  }

  //Redireccionamos a la lista de usuarios

  redireccionarListaUsuario(){
    this.router.navigate(['/listarUsuario']);
  }

}
