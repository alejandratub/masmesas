import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Mueble} from '../models/muebles';

@Injectable()
export class MueblesService {
  mueble: Mueble;

  constructor(public http: HttpClient, private auth: AuthService) { }
  getAllMuebles() {
    return this.http.get('http://localhost:3000/api/muebles?access_token=' + this.auth.getToken())
      .map(res => res as Mueble[] || []);
  }
  addMueble(mueble) {
    return this.http.post('http://localhost:3000/api/muebles?access_token=' + this.auth.getToken(), mueble);
  }

  updateMueble(mueble) {
    return this.http.patch('http://localhost:3000/api/muebles/' + mueble.id + '?access_token=' + this.auth.getToken(), mueble);
  }

  deleteMueble(mueble) {
    return this.http.delete('http://localhost:3000/api/muebles/' + mueble.id + '?access_token=' + this.auth.getToken(), {});
  }
  getMueble(mueble) {
    return this.http.get('http://localhost:3000/api/muebles/' + mueble.id + '?access_token=' + this.auth.getToken(), {});
  }
  getLocalMueble() {
    return this.mueble;
  }
  setLocalMueble(mueble) {
    this.mueble = mueble;
  }
}
