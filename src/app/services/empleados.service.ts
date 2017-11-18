import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Empleado} from '../models/empleado';


@Injectable()
export class EmpleadosService {

  constructor(public http: HttpClient, private auth: AuthService) { }
  getEmpleados() {
    return this.http.get('http://localhost:3000/api/empleados?access_token=' + this.auth.getToken())
      .map(res => res as Empleado[] || []);
  }
  addEmpleado(empleado){
    return this.http.post('http://localhost:3000/api/empleados?access_token=' + this.auth.getToken(), empleado);
  }

}
