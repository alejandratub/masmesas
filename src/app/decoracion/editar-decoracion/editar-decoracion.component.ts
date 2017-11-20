import { Component, OnInit } from '@angular/core';
import {Decoracion} from '../../models/decoracion';
import {Router} from '@angular/router';
import {DecoracionsService} from '../../services/decoracion.service';

@Component({
  selector: 'app-editar-decoracion',
  templateUrl: './editar-decoracion.component.html',
  styleUrls: ['./editar-decoracion.component.css']
})
export class EditarDecoracionComponent implements OnInit {
  decoracion: Decoracion;
  constructor(private decoracionService: DecoracionsService, private router: Router) {
  }

  updateDecoracion() {
    this.decoracionService.updateDecoracion(this.decoracion).subscribe(data => {
      alert('Decoración editada con éxito');
      this.router.navigate(['decoracion']);
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

  ngOnInit() {
    this.decoracion = this.decoracionService.getLocalDecoracion();
  }
}
