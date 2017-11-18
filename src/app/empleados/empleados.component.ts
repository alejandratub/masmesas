import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../empleados.service';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados;
  constructor(public empleadoService: EmpleadosService) {
    this.empleados = new Array();
    this.empleados.push(empleadoService.getEmpleados().toString());
  }

  ngOnInit() {
  }

}
