import { Component, OnInit } from '@angular/core';
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
              private muebleService: MueblesService, private decoracionService: DecoracionsService) {
    this.selectedMueble = 0;
    this.cm = 0;
    this.cotizacion = new Cotizacion();
    this.selectedDecoracion = 0;
    this.cd = 0;
  }
  changeCliente(cliente){
    console.log(cliente);
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
  addMueble(){
    this.cantidadMueble[this.selectedMueble] = this.cm;
    console.log('se agregaron ' + this.cantidadMueble[this.selectedMueble] + ' tipo ' + this.muebles[this.selectedMueble].nombre);
  }
  changeDecoracion(index) {
    this.selectedDecoracion = index;
  }
  addDecoracion() {
    this.cantidadDecoracion[this.selectedDecoracion] = this.cd;
    console.log('se agregaron ' + this.cantidadDecoracion[this.selectedDecoracion] + ' tipo ' + this.decoraciones[this.selectedDecoracion].nombre);
  }
  ngOnInit() {
    this.clienteService.getAllClientes().subscribe(data => {
      this.clientes = data;
      console.log(data);
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
    this.muebleService.getAllMuebles().subscribe(data2 => {
      this.muebles = data2;
      this.cantidadMueble = new Array<number>(this.muebles.length);
      console.log(data2);
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
    this.decoracionService.getAllDecoracions().subscribe(data3 => {
      this.decoraciones = data3;
      this.cantidadDecoracion = new Array<number>(this.decoraciones.length);
      console.log(data3);
    }, err => {
      console.log(err);
      // Error de conexion
      alert('Error de conexion');
    });
  }

}
