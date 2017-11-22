import { Injectable } from '@angular/core';
import {Pago} from '../models/pago';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Evento} from '../models/eventos';


@Injectable()
export class PagoService {
  pago: Pago;

  constructor(public http: HttpClient, private auth: AuthService) { }
  getAllPagos() {
    return this.http.get('http://localhost:3000/api/pagos?access_token=' + this.auth.getToken())
      .map(res => res as Pago[] || []);
  }
  addPago(pago, evento) {
    pago.eventoId = evento.id;
    return this.http.post('http://localhost:3000/api/pagos?access_token=' + this.auth.getToken(), pago);
  }

  updatePago(pago) {
    return this.http.patch('http://localhost:3000/api/pagos/' + pago.id + '?access_token=' + this.auth.getToken(), pago);
  }

  deletePago(pago) {
    return this.http.delete('http://localhost:3000/api/pagos/' + pago.id + '?access_token=' + this.auth.getToken(), {});
  }
  getPago(pago) {
    return this.http.get('http://localhost:3000/api/pagos/' + pago.id + '?access_token=' + this.auth.getToken(), {});
  }
  getLocalPago() {
    return this.pago;
  }
  setLocalPago(pago) {
    this.pago = pago;
  }
  getPagoEvento(evento) {
    return this.http.get('http://localhost:3000/api/evento/' + evento.id + '/pagos?access_token=' + this.auth.getToken(), {})
      .map(res => res as Pago[] || []);
  }
  getEvento(pago){
    return this.http.get('http://localhost:3000/api/pagos/' + pago.id + '/evento?access_token=' + this.auth.getToken(), {})
      .map(res => res as Evento[] || []);
  }
}

