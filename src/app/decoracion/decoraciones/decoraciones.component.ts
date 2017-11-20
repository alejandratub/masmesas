import { Component, OnInit } from '@angular/core';
import {DecoracionsService} from '../../services/decoracion.service';
import {Decoracion} from '../../models/decoracion';
import {Router} from '@angular/router';

@Component({
  selector: 'app-decoraciones',
  templateUrl: './decoraciones.component.html',
  styleUrls: ['./decoraciones.component.css']
})
export class DecoracionesComponent implements OnInit {
  decoracions: Array<Decoracion>;

  constructor(public decoracionService: DecoracionsService, private router: Router) { }

  ngOnInit() {
    console.log('init');
    this.decoracionService.getAllDecoracions().subscribe(data => {
      this.decoracions = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }
  addDecoracion(decoracions) {
    this.decoracionService.addDecoracion(decoracions).subscribe(data => {
      // this.decoracions = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }
  updateDecoracion(decoracions) {
    this.decoracionService.setLocalDecoracion(decoracions);
    this.router.navigate(['editar-decoracion']);
  }
  deleteDecoracion(decoracions, index) {
    this.decoracionService.deleteDecoracion(decoracions).subscribe(data => {
      alert('Decoracion eliminada con éxito');
      this.decoracions.splice(index, 1);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }


}
