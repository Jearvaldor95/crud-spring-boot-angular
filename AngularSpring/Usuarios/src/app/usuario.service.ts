import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private backenUrl ="http://localhost:8080/apiUsuario/usuario";
  constructor(private httpClient: HttpClient) { 
    
  }

  listaUsuario(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.backenUrl}`);
  }

  listarUsuarioId(id: number): Observable <Usuario>{
    return this.httpClient.get<Usuario>(`${this.backenUrl}/${id}`);
  }

  guardarUsuario(usuario: Usuario):Observable <Object>{
    return this.httpClient.post(`${this.backenUrl}`, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario):Observable<Object>{
    return this.httpClient.put(`${this.backenUrl}/${id}`, usuario);
  }

  eliminarUsuario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backenUrl}/${id}`);
  }
}
