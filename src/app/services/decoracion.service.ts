import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Decoracion} from '../models/decoracion';

@Injectable()
export class DecoracionsService {
  decoracion: Decoracion;

  constructor(public http: HttpClient, private auth: AuthService) { }
  getAllDecoracions() {
    return this.http.get('http://localhost:3000/api/decoraciones?access_token=' + this.auth.getToken())
      .map(res => res as Decoracion[] || []);
  }
  addDecoracion(decoracion) {
    return this.http.post('http://localhost:3000/api/decoraciones?access_token=' + this.auth.getToken(), decoracion);
  }

  updateDecoracion(decoracion) {
    return this.http.patch('http://localhost:3000/api/decoraciones/' + decoracion.id + '?access_token=' + this.auth.getToken(), decoracion);
  }

  deleteDecoracion(decoracion) {
    return this.http.delete('http://localhost:3000/api/decoraciones/' + decoracion.id + '?access_token=' + this.auth.getToken(), {});
  }
  getDecoracion(decoracion) {
    return this.http.get('http://localhost:3000/api/decoraciones/' + decoracion.id + '?access_token=' + this.auth.getToken(), {});
  }
  getLocalDecoracion() {
    return this.decoracion;
  }
  setLocalDecoracion(decoracion) {
    this.decoracion = decoracion;
  }
}
