import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Evento} from '../models/eventos';


@Injectable()
export class EventosService {
  evento: Evento;

  constructor(public http: HttpClient, private auth: AuthService) { }
  getAllEventos() {
    return this.http.get('http://localhost:3000/api/eventos?access_token=' + this.auth.getToken())
      .map(res => res as Evento[] || []);
  }
  addEvento(evento) {
    return this.http.post('http://localhost:3000/api/eventos?access_token=' + this.auth.getToken(), evento);
  }

  updateEvento(evento) {
    return this.http.patch('http://localhost:3000/api/eventos/' + evento.id + '?access_token=' + this.auth.getToken(), evento);
  }

  deleteEvento(evento) {
    return this.http.delete('http://localhost:3000/api/eventos/' + evento.id + '?access_token=' + this.auth.getToken(), {});
  }
  getEvento(evento) {
    return this.http.get('http://localhost:3000/api/eventos/' + evento.id + '?access_token=' + this.auth.getToken(), {});
  }
  getLocalEvento() {
    return this.evento;
  }
  setLocalEvento(evento) {
    this.evento = evento;
  }
  getEventoCliente(cliente) {
    return this.http.get('http://localhost:3000/api/clientes/' + cliente.id + '/eventos?access_token=' + this.auth.getToken(), {})
      .map(res => res as Evento[] || []);
  }
}
