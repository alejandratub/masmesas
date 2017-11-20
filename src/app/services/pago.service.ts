import { Injectable } from '@angular/core';
import {Pago} from '../models/pago';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Cotizacion} from '../models/cotizacion';


@Injectable()
export class PagoService {
  pago: Pago;

  constructor(public http: HttpClient, private auth: AuthService) { }
  getAllPagos() {
    return this.http.get('http://localhost:3000/api/pagos?access_token=' + this.auth.getToken())
      .map(res => res as Pago[] || []);
  }
  addPago(pago, cotizacion) {
    return this.http.post('http://localhost:3000/api/cotizacions/' + cotizacion.id + '/pagos?access_token=' + this.auth.getToken(), pago);
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
  getPagoCotizacion(cotizacion) {
    return this.http.get('http://localhost:3000/api/cotizacions/' + cotizacion.id + '/pagos?access_token=' + this.auth.getToken(), {})
      .map(res => res as Pago[] || []);
  }
  getCotizacion(pago){
    return this.http.get('http://localhost:3000/api/pagos/' + pago.id + '/cotizacion?access_token=' + this.auth.getToken(), {})
      .map(res => res as Cotizacion[] || []);
  }
}

