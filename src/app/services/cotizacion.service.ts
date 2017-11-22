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
    return this.http.post('http://localhost:3000/api/cotizaciones?access_token=' + this.auth.getToken(), cotizacion)
      .map(res => res as Cotizacion || null);
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
  addMuebleCotizacion(mueble, cotizacion, cantidad) {
    return this.http.put('http://localhost:3000/api/cotizaciones/' + cotizacion.id + '/muebles/rel/' + mueble.id + '?access_token=' + this.auth.getToken(), {
      cantidad: cantidad
    });
  }
    addDecoracionCotizacion(decoracion, cotizacion, cantidad) {
      return this.http.put('http://localhost:3000/api/cotizaciones/' + cotizacion.id + '/muebles/rel/' + decoracion.id + '?access_token=' + this.auth.getToken(), {
        cantidad: cantidad
      });
    }
  getLocalCotizacion() {
    return this.cotizacion;
  }
  setLocalCotizacion(cotizacion) {
    this.cotizacion = cotizacion;
  }
}
