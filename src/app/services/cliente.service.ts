import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable()
export class ClienteService {

  constructor(public http: HttpClient, private auth: AuthService) { }
  getCliente() {
    return this.http.get('http://localhost:3000/api/clientes?access_token=' + this.auth.getToken());
  }
  addCliente(cliente){
    return this.http.post('http://localhost:3000/api/clientes?access_token=' + this.auth.getToken(), cliente);
  }

}
