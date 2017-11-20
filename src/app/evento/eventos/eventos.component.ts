import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service';
import {Router} from '@angular/router';
import {Evento} from '../../models/eventos';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Array<Evento>;
  clientes: Array<Cliente>;
  constructor(public eventoService: EventosService, public router: Router) {
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
  updateEvento(evento) {
    this.eventoService.setLocalEvento(evento);
    this.router.navigate(['editar-evento']);
  }

  ngOnInit() {
    this.eventoService.getAllEventos().subscribe(data => {
      this.eventos = data;
      this.clientes = new Array<Cliente>(this.eventos.length);
      for (const evento of this.eventos) {
        this.eventoService.getCliente(evento).subscribe(
          data2 => {
            this.clientes.push(data2[0]);
          }, err => {
            console.log(err);
            // Error de conexion
            alert('Error de conexion');
          }
        );
      }
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }

}
