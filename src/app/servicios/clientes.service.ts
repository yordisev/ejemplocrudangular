import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from 'src/app/models/clientes/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  API_URI = 'http://localhost/api/usuarios';

  constructor(private http: HttpClient) { }

  SaveCliente(Cliente: Clientes) {
    return this.http.post(`${this.API_URI}/usuarios`, Cliente);
  }
}
