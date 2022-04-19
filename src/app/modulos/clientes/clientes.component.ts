import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes/Clientes';


import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  constructor(private router: Router,private ActivatedRoute:ActivatedRoute,private ClientesService:ClientesService) { }

  Cliente:Clientes = {
    nombre:'',
    apellido:'',
  };

  seleccionaritem = 'listar';
  ngOnInit(): void {
  }

  GuardarCliente() {
    this.ClientesService.SaveCliente(this.Cliente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/clientes']);
        },
        err => console.error(err)
      )
  }

}
