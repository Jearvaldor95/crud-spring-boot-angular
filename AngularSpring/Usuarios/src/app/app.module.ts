import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';
import { BuscarUsuarioComponent } from './componentes/buscar-usuario/buscar-usuario.component';
import { DetallesUsuarioComponent } from './componentes/detalles-usuario/detalles-usuario.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './modelos/filterPipe';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    BuscarUsuarioComponent,
    DetallesUsuarioComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
