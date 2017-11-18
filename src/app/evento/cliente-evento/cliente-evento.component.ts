import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {EventosService} from '../../services/eventos.service';
import {Evento} from "../../models/eventos";
import {ClienteService} from "../../services/cliente.service";

@Component({
  selector: 'app-cliente-evento',
  templateUrl: './cliente-evento.component.html',
  styleUrls: ['./cliente-evento.component.css']
})
export class ClienteEventoComponent implements OnInit {
  cliente: Cliente;
  eventos: Array<Evento>;
  constructor(public eventoService: EventosService, public clienteService: ClienteService) {
  }


  ngOnInit() {
    this.cliente = this.clienteService.getLocalCliente();
    this.eventoService.getEventoCliente(this.cliente).subscribe(data => {
      this.eventos = data;
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

}
