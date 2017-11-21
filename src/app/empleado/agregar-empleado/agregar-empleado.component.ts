import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../services/empleados.service';
import {Router} from '@angular/router';
import {Empleado} from '../../models/empleado';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  empleado: Empleado;

  constructor(private empleadoService: EmpleadosService,  private router: Router) {
    this.empleado = new Empleado();
  }
  addEmpleado() {
    this.empleadoService.addEmpleado(this.empleado).subscribe(data => {
      console.log(data);
      alert('Empleado creado con éxito');
      this.router.navigate(['empleados']);
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

  ngOnInit() {
  }

}
