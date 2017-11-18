import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {Cliente} from '../../models/cliente';
import {Router} from '@angular/router';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Array<Cliente>;
  constructor(public clienteService: ClienteService, public router: Router) {
  }

  ngOnInit() {
    this.clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }

  deleteCliente(cliente, index) {
    this.clienteService.deleteCliente(cliente).subscribe(data => {
      alert('Cliente eliminado con éxito');
      this.clientes.splice(index, 1);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }
  verCliente(cliente){
    this.clienteService.setLocalCliente(cliente);
    this.router.navigate(['ver-cliente']);
  }
  updateCliente(cliente) {
    this.clienteService.setLocalCliente(cliente);
    this.router.navigate(['editar-cliente']);
  }
  verEventos(cliente) {
    this.clienteService.setLocalCliente(cliente);
    this.router.navigate(['cliente-evento']);

  }

}
