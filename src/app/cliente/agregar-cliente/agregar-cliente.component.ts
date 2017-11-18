import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  cliente: Cliente;

  constructor(private clienteService: ClienteService,  private router: Router) {
    this.cliente = new Cliente();
  }
  addCliente() {
    this.clienteService.addCliente(this.cliente).subscribe(data => {
      console.log(data);
      alert('Cliente creado con éxito');
      this.router.navigate(['clientes']);
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

  ngOnInit() {

  }

}
