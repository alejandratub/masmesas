import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Empleado} from '../../models/empleado';
import {EmpleadosService} from '../../services/empleados.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  empleados: Empleado;
  constructor(private empleadosService: EmpleadosService, private router: Router) {
  }

  updateEmpleado() {
    this.empleadosService.updateEmpleado(this.empleados).subscribe(data => {
      alert('Empleado editado con éxito');
      this.router.navigate(['empleados']);
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

  ngOnInit() {
    this.empleados = this.empleadosService.getLocalEmpleado();
  }

}
