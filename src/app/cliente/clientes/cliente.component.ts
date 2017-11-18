import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Array<Cliente>;
  constructor(public clienteService: ClienteService) {
  }

  ngOnInit() {
    console.log('init');
    this.clienteService.getCliente().subscribe(data => {
      console.log(data);
      this.clientes = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
    /* this.addEmpleado({
      nombre: 'string',
      apellido: 'string',
      sueldo: 0,
      puesto: 'string',
      telefono: 0,
    }); */
  }
  addCliente(cliente) {
    this.clienteService.addCliente(cliente).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

}
