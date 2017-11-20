import { Component, OnInit } from '@angular/core';
import {Cotizacion} from '../../models/cotizacion';
import {PagoService} from '../../services/pago.service';
import {Router} from '@angular/router';
import {Pago} from '../../models/pago';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  cotizacion: Array<Cotizacion>;
  pago: Array<Pago>;

  constructor(public pagoService: PagoService, public router: Router) {
  }

  deletePago(pago, index) {
    this.pagoService.deletePago(pago).subscribe(data => {
      alert('Pago eliminado con éxito');
      this.pago.splice(index, 1);
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

  updatePago(pago) {
    this.pagoService.setLocalPago(pago);
    this.router.navigate(['editar-pago']);
  }

  ngOnInit() {
    this.pagoService.getAllPagos().subscribe(data => {
      this.pago = data;
      this.cotizacion = new Array<Cotizacion>(this.pago.length);
      for (const pago of this.pago) {
        this.pagoService.getCotizacion(pago).subscribe(
          data2 => {
            this.cotizacion.push(data2[0]);
          }, err => {
            console.log(err);
            // Error de conexion
            alert('Error de conexion');
          }
        );
      }
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }
}
