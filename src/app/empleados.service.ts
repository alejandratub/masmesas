import { Injectable } from '@angular/core';
import {ApiService} from './api.service';


@Injectable()
export class EmpleadosService {

  constructor(public api: ApiService) { }
  getEmpleados(params? ) {
    return this.api.get('empleados', params);
  }

}
