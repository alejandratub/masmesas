import { Injectable } from '@angular/core';
import {Cotizacion} from '../models/cotizacion';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class CotizacionsService {
  cotizacion: Cotizacion;

  constructor(public http: HttpClient, private auth: AuthService) { }
  getAllCotizacions() {
    return this.http.get('http://localhost:3000/api/cotizaciones?access_token=' + this.auth.getToken())
      .map(res => res as Cotizacion[] || []);
  }
  addCotizacion(cotizacion) {
    return this.http.post('http://localhost:3000/api/cotizaciones?access_token=' + this.auth.getToken(), cotizacion);
  }

  updateCotizacion(cotizacion) {
    return this.http.patch('http://localhost:3000/api/cotizaciones/' + cotizacion.id + '?access_token=' + this.auth.getToken(), cotizacion);
  }

  deleteCotizacion(cotizacion) {
    return this.http.delete('http://localhost:3000/api/cotizaciones/' + cotizacion.id + '?access_token=' + this.auth.getToken(), {});
  }
  getCotizacion(cotizacion) {
    return this.http.get('http://localhost:3000/api/cotizaciones/' + cotizacion.id + '?access_token=' + this.auth.getToken(), {});
  }
  getLocalCotizacion() {
    return this.cotizacion;
  }
  setLocalCotizacion(cotizacion) {
    this.cotizacion = cotizacion;
  }
}
