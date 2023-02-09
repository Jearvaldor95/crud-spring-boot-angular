import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  id!: number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    this.router.navigate(['detalleUsuario',this.id]);
    
  }


}
