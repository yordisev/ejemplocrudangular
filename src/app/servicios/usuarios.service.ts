import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuarios} from 'src/app/models/usuarios/Usuarios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }

  // API_URI = 'http://localhost/api/usuarios/usuarios';
  API_URI = 'http://localhost/apiangular/usuarios/usuarios';

  
  getUsuarios() {
  var  tokenpeticion = {
     // token: `${this.peticiontoken}`,
     function: 'listarusuarios'
   };
    return this.http.post(this.API_URI,tokenpeticion);
  }

  saveUsuarios(usuarios: Usuarios) {
  var guardarUsuario = {
      function: 'RegistroUsuario',
      datos: usuarios
    }
    return this.http.post(this.API_URI,guardarUsuario);
  }
  
  getusuario(id_admin: number) {
    var datos = {
      function: 'ObtenerUsuario',
      datos: id_admin
    }
    return this.http.post<Usuarios[]>(this.API_URI,datos);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }


  updateGame(id: string|number, updatedGame: Usuarios): Observable<Usuarios> {
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedGame);
  }
}
