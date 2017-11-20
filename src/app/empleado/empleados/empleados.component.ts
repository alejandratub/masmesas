import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../services/empleados.service';
import {Empleado} from '../../models/empleado';
import {Router} from "@angular/router";

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Array<Empleado>;
  constructor(public empleadoService: EmpleadosService, private router: Router) {
  }

  ngOnInit() {
    console.log('init');
    this.empleadoService.getAllEmpleados().subscribe(data => {
        this.empleados = data;
      }, err => {
      console.log(err);
        // Error de conexion
      });

  }
  addEmpleado(empleado) {
    this.empleadoService.addEmpleado(empleado).subscribe(data => {
     // this.empleados = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }
  updateEmpleado(empleado) {
    this.empleadoService.setLocalEmpleado(empleado);
    this.router.navigate(['editar-empleado']);
  }
  deleteEmpleado(empleado, index) {
    this.empleadoService.deleteEmpleado(empleado).subscribe(data => {
      alert('Empleado eliminado con éxito');
      this.empleados.splice(index, 1);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

}
