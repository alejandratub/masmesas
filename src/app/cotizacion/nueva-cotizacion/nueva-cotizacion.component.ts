import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {Router} from '@angular/router';
import {Cliente} from '../../models/cliente';
import {Decoracion} from '../../models/decoracion';
import {Mueble} from '../../models/muebles';
import {Evento} from '../../models/eventos';
import {Cotizacion} from '../../models/cotizacion';
import {MueblesService} from '../../services/muebles.service';
import {DecoracionsService} from '../../services/decoracion.service';
import {EventosService} from '../../services/eventos.service';
import {CotizacionsService} from "../../services/cotizacion.service";

@Component({
  selector: 'app-nueva-cotizacion',
  templateUrl: './nueva-cotizacion.component.html',
  styleUrls: ['./nueva-cotizacion.component.css']
})
export class NuevaCotizacionComponent implements OnInit {
  clientes: Array<Cliente>;
  eventos: Array<Evento>;
  muebles: Array<Mueble>;
  decoraciones: Array<Decoracion>;
  cotizacion: Cotizacion;
  selectedMueble: number;
  cantidadMueble: Array<number>;
  cm: number;
  selectedDecoracion: number;
  cantidadDecoracion: Array<number>;
  cd: number;

  constructor(private clienteService: ClienteService, private eventoService: EventosService, private router: Router,
              private muebleService: MueblesService, private decoracionService: DecoracionsService, private cotizacionService: CotizacionsService) {
    this.selectedMueble = 0;
    this.cm = 0;
    this.cotizacion = new Cotizacion();
    this.selectedDecoracion = 0;
    this.cd = 0;
    this.cotizacion.precio_montaje = 0;
    this.cotizacion.flete = 0;
    this.cotizacion.total = 0;
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

  changeMueble(index) {
    this.selectedMueble = index;
  }

  addMueble() {
    if (this.cm <= this.muebles[this.selectedMueble].cantidad) {
      this.cantidadMueble[this.selectedMueble] += this.cm;
      console.log('se agregaron ' + this.cantidadMueble[this.selectedMueble] + ' tipo ' + this.muebles[this.selectedMueble].nombre);
      this.muebles[this.selectedMueble].cantidad -= this.cm;
      this.total();
    } else {
      alert('La cantidad disponible es menor a la seleccionada');
    }
  }

  deleteMueble(i) {
    this.muebles[i].cantidad += this.cantidadMueble[i];
    this.cantidadMueble[i] = 0;
    this.total();
  }

  addCotizacion() {
    if (this.eventos.length === 0) {
      alert('El cliente debe tener al menos un evento');
      this.router.navigate(['clientes']);
    } else {
      this.total();
      this.cotizacionService.addCotizacion(this.cotizacion).subscribe(data => {
        this.cotizacion = data;
        console.log(this.cotizacion);
        for (let i = 0; i < this.muebles.length; i++) {
          if (this.cantidadMueble[i] > 0 ) {
            this.cotizacionService.addMuebleCotizacion(this.muebles[i], this.cotizacion, this.cantidadMueble[i]).subscribe(data2 => {
              console.log(data2);
            }, err => {
              console.log(err);
              // Error de conexion
              alert('Error de conexion');
            });
          }
        }
      }, err => {
        console.log(err);
        // Error de conexion
        alert('Error de conexion');
      });
      alert('Se guardado la cotizacion');
      this.router.navigate(['principal']);
    }
  }

  total() {
    this.cotizacion.total = 0;
    for (let i = 0; i < this.muebles.length; i++) {
      this.cotizacion.total += (this.muebles[i].costo_renta * this.cantidadMueble[i]);
    }
    this.cotizacion.total += (this.cotizacion.precio_montaje + this.cotizacion.flete);
    console.log(this.cotizacion.total);
  }

  changeDecoracion(index) {
    this.selectedDecoracion = index;
  }

  addDecoracion() {
    if (this.cd <= this.decoraciones[this.selectedDecoracion].cantidad) {
      this.cantidadDecoracion[this.selectedDecoracion] += this.cd;
      console.log('se agregaron ' + this.cantidadDecoracion[this.selectedDecoracion] + ' tipo ' + this.decoraciones[this.selectedDecoracion].nombre);
      this.decoraciones[this.selectedDecoracion].cantidad -= this.cd;
    } else {
      alert('La cantidad disponible es menor a la seleccionada');
    }
  }

  deleteDecoracion(i) {
    this.decoraciones[i].cantidad += this.cantidadDecoracion[i];
    this.cantidadDecoracion[i] = 0;
  }

  alert() {
    alert('HOLA');
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
    this.muebleService.getAllMuebles().subscribe(data2 => {
      this.muebles = data2;
      this.cantidadMueble = new Array<number>(this.muebles.length).fill(0);
      console.log(data2);
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
    this.decoracionService.getAllDecoracions().subscribe(data3 => {
      this.decoraciones = data3;
      this.cantidadDecoracion = new Array<number>(this.decoraciones.length).fill(0);
      console.log(data3);
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }

}
