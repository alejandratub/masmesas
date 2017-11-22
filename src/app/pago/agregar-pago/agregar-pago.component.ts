import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {EventosService} from '../../services/eventos.service';
import {Cliente} from '../../models/cliente';
import {Evento} from '../../models/eventos';

@Component({
  selector: 'app-agregar-pago',
  templateUrl: './agregar-pago.component.html',
  styleUrls: ['./agregar-pago.component.css']
})
export class AgregarPagoComponent implements OnInit {
  clientes: Array<Cliente>;
  eventos: Array<Evento>;

  constructor(private clienteService: ClienteService, private eventoService: EventosService) { }
  changeCliente(cliente) {
    this.eventoService.getEventoCliente(cliente).subscribe(data => {
      this.eventos = data;
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

  ngOnInit() {
    this.clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
      if (this.clientes.length > 0) {
        this.changeCliente(this.clientes[0]);
      }
      console.log(data);
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }

}
