import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {cliente: Cliente;
  constructor(private clienteService: ClienteService) {
    this.cliente = new Cliente();
  }
  ngOnInit() {
    this.cliente = this.clienteService.getLocalCliente();
  }

}
