import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './modulos/clientes/clientes.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { SidebarComponent } from './sidebar/sidebar.component';


// servicios //
import { ClientesService } from './servicios/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    UsuariosComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
