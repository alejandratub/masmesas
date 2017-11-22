import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {EventosService} from '../../services/eventos.service';
import {Evento} from '../../models/eventos';
import {ClienteService} from '../../services/cliente.service';
import {Router} from '@angular/router';
import {CotizacionsService} from "../../services/cotizacion.service";

@Component({
  selector: 'app-cliente-evento',
  templateUrl: './cliente-evento.component.html',
  styleUrls: ['./cliente-evento.component.css']
})
export class ClienteEventoComponent implements OnInit {
  cliente: Cliente;
  eventos: Array<Evento>;
  constructor(public eventoService: EventosService, public clienteService: ClienteService, private router: Router, private cotizacionService: CotizacionsService) {
  }
  updateEvento(evento) {
    this.eventoService.setLocalEvento(evento);
    this.router.navigate(['editar-evento']);
  }


  deleteEvento(evento, index) {
    this.eventoService.deleteEvento(evento).subscribe(data => {
      alert('Evento eliminado con éxito');
      this.eventos.splice(index, 1);
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }
  verCotizacion(cotizacion) {
    this.cotizacionService.setLocalCotizacion(cotizacion);
    this.router.navigate(['cotizacion']);

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
