import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../services/empleados.service';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados;
  constructor(public empleadoService: EmpleadosService) {
    this.empleados = new Array();
  }

  ngOnInit() {
    console.log('init');
    this.empleadoService.getEmpleados().subscribe(data => {
        this.empleados = data;
      }, err => {
      console.log(err);
        // Error de conexion
      });
    /* this.addEmpleado({
      nombre: 'string',
      apellido: 'string',
      sueldo: 0,
      puesto: 'string',
      telefono: 0,
    }); */
  }
  addEmpleado(empleado) {
    this.empleadoService.addEmpleado(empleado).subscribe(data => {
      this.empleados = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

}
