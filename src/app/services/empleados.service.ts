import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Empleado} from '../models/empleado';


@Injectable()
export class EmpleadosService {
  empleados: Empleado;
  constructor(public http: HttpClient, private auth: AuthService) { }
  getAllEmpleados() {
    return this.http.get('http://localhost:3000/api/empleados?access_token=' + this.auth.getToken())
      .map(res => res as Empleado[] || []);
  }
  addEmpleado(empleados) {
    return this.http.post('http://localhost:3000/api/empleados?access_token=' + this.auth.getToken(), empleados);
  }
  updateEmpleado(empleados) {
    return this.http.patch('http://localhost:3000/api/empleados/' + empleados.id + '?access_token=' + this.auth.getToken(), empleados);
  }

  deleteEmpleado(empleados) {
    return this.http.delete('http://localhost:3000/api/empleados/' + empleados.id + '?access_token=' + this.auth.getToken(), {});
  }
   getLocalEmpleado() {
    return this.empleados;
  }
  setLocalEmpleado(empleado) {
    this.empleados = empleado;
  }
}
