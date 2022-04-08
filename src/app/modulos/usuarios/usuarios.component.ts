import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Usuarios} from 'src/app/models/usuarios/Usuarios'
import {UsuariosService} from 'src/app/servicios/usuarios.service'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(private usuarioservicios: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

 usuarios: Usuarios = {
  id_admin: 0,
    tipoDoc: '',
    numDoc:0,
    usuario: '',
    nombres: '',
    apellidos: '',
    contrasena: '',
    estado: '',
    fecha_registro: new Date(),
    nivel: '',
  
}
listausuarios: any = [];
selection = 'listar';
  ngOnInit() {
    this.getUsuarios();
    
  }

  getUsuarios() {
    this.usuarioservicios.getUsuarios()
      .subscribe(
        res => {
          this.listausuarios = res;
        },
        err => console.error(err)
      );
  }

  GuardarUsuario() {
    this.usuarioservicios.saveUsuarios(this.usuarios)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.error(err)
      )
  }

  llamarusuario(id_admin: number) {
    this.usuarioservicios.getusuario(id_admin)
      .subscribe(
        res => {
          this.usuarios = res[0];
          this.selection = 'agregar';
        },
        err => console.log(err)
      )
  }

  editarusuario(idusuario: string | number) {
    delete this.usuarios.fecha_registro;
    this.usuarioservicios.updateGame(idusuario, this.usuarios)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.error(err)
      )
  }
}
