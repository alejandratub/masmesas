import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service';
import {Router} from '@angular/router';
import {Evento} from '../../models/eventos';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  evento: Evento;
  constructor(private eventoService: EventosService, private router: Router) { }
  updateEvento() {
    this.eventoService.updateEvento(this.evento).subscribe(data => {
      alert('Evento editado con éxito');
      this.router.navigate(['cliente-evento']);
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

  ngOnInit() {
    console.log('sdfsdfsdfdsd');
    this.evento = this.eventoService.getLocalEvento();
    console.log(this.evento);
  }

}
