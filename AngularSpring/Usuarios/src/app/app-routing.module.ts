import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';
import { BuscarUsuarioComponent } from './componentes/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { DetallesUsuarioComponent } from './componentes/detalles-usuario/detalles-usuario.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {path: 'listarUsuario', component: ListarUsuarioComponent},
  //por defecto redirigimos a la lista de usuarios
  {path: '', redirectTo: 'listarUsuario', pathMatch: 'full'}, 
  {path: 'guardarUsuario', component: CrearUsuarioComponent},
  {path: 'buscarUsuario', component: BuscarUsuarioComponent},
  {path: 'actualizarUsuario/:id', component: ActualizarUsuarioComponent},
  {path: 'detalleUsuario/:id', component: DetallesUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
