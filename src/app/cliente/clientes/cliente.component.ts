import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes;
  constructor(public clienteService: ClienteService) {
    this.clientes = new Array();
  }

  ngOnInit() {
    console.log('init');
    this.clienteService.getCliente().subscribe(data => {
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
      this.clientes = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

}
