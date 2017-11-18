import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Evento} from '../../models/eventos';
import {EventosService} from '../../services/eventos.service';
import {Cliente} from '../../models/cliente';
import {ClienteService} from '../../services/cliente.service';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {
  evento: Evento;
  cliente: Cliente;

  constructor(private eventoService: EventosService,  private router: Router, private clienteService: ClienteService) {
    this.evento = new Evento();
  }
  addEvento() {
    this.eventoService.addEvento(this.evento, this.cliente).subscribe(data => {
      console.log(data);
      alert('Evento creado con éxito');
      this.router.navigate(['cliente-evento']);
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

  ngOnInit() {
    this.cliente = this.clienteService.getLocalCliente();
  }

}
