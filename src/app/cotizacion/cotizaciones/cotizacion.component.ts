import { Component, OnInit } from '@angular/core';
import {Cotizacion} from '../../models/cotizacion';
import {CotizacionsService} from '../../services/cotizacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  cotizaciones: Array<Cotizacion>;
  constructor(public cotizacionService: CotizacionsService, public router: Router) {
  }

  ngOnInit() {
    this.cotizacionService.getAllCotizacions().subscribe(data => {
      this.cotizaciones = data;
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }
  deleteCotizacion(cotizacion, index) {
    this.cotizacionService.deleteCotizacion(cotizacion).subscribe(data => {
      alert('Cotizacion eliminada con éxito');
      this.cotizaciones.splice(index, 1);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

}
