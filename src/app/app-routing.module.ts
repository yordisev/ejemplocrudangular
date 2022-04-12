import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos/modulos.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { LoginComponent } from './login/login.component'
import { ClientesComponent } from './modulos/clientes/clientes.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { NopagefoundComponent } from './modulos/nopagefound/nopagefound.component';

const routes: Routes = [
  {
  path: '',
  component: ModulosComponent,
    children: [
      {path: 'inicio',component: InicioComponent},
      {path: 'clientes',component: ClientesComponent},
      {path: 'usuarios',component: UsuariosComponent},
      {path: 'usuarios/edit/:id',component: UsuariosComponent},
      {path: '',redirectTo: '/inicio',pathMatch: 'full'},
    ]
},
  {path: 'login',component: LoginComponent},
  {path: '**',component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
