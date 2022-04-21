import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from 'src/app/models/login/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost/api/usuarios/usuarios';

  Iniciasesion(login: Login) {
    var datos = {
        ruta:'autorizacion/login',
        function: 'Login',
        datos: login
      }
      return this.http.post(this.API_URI,datos);
    }

}
