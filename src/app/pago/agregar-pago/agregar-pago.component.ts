import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {EventosService} from '../../services/eventos.service';
import {Cliente} from '../../models/cliente';
import {Evento} from '../../models/eventos';
import {Pago} from '../../models/pago';
import {PagoService} from '../../services/pago.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-pago',
  templateUrl: './agregar-pago.component.html',
  styleUrls: ['./agregar-pago.component.css']
})
export class AgregarPagoComponent implements OnInit {
  clientes: Array<Cliente>;
  eventos: Array<Evento>;
  pago: Pago;

  constructor(private clienteService: ClienteService, private eventoService: EventosService, private pagoService: PagoService, private router: Router) {
    this.pago = new Pago();
  }
  changeCliente(cliente) {
    this.eventoService.getEventoCliente(cliente).subscribe(data => {
      this.eventos = data;
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }
  addPago(){
    if (this.eventos.length === 0) {
      alert('El cliente debe tener al menos un evento');
      this.router.navigate(['clientes']);
    } else {
      this.pagoService.addPago(this.pago, this.eventos).subscribe(data => {
        alert('Pago agregado con éxito');
        console.log(data);
        this.router.navigate(['pagos']);
      }, err => {
        console.log(err);
        // Error de conexion
        alert('Error de conexion');
      });
    }
  }
  ngOnInit() {
    this.clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
      if (this.clientes.length > 0) {
        this.changeCliente(this.clientes[0]);
      }
      console.log(data);
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }

}
