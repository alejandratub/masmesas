import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../services/empleados.service';
import {Empleado} from '../../models/empleado';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Array<Empleado>;
  constructor(public empleadoService: EmpleadosService) {
  }

  ngOnInit() {
    console.log('init');
    this.empleadoService.getAllEmpleados().subscribe(data => {
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
     // this.empleados = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

}
