import { Component, OnInit } from '@angular/core';
import {Mueble} from '../../models/muebles';
import {MueblesService} from '../../services/muebles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-muebles',
  templateUrl: './muebles.component.html',
  styleUrls: ['./muebles.component.css']
})
export class MueblesComponent implements OnInit {
  muebles: Array<Mueble>;

  constructor(public muebleService: MueblesService, private router: Router) { }

  ngOnInit() {
    console.log('init');
    this.muebleService.getAllMuebles().subscribe(data => {
      this.muebles = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }
  addMueble(muebles) {
    this.muebleService.addMueble(muebles).subscribe(data => {
      // this.muebles = data;
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }
  updateMueble(muebles) {
    this.muebleService.setLocalMueble(muebles);
    this.router.navigate(['editar-mueble']);
  }
  deleteMueble(muebles, index) {
    this.muebleService.deleteMueble(muebles).subscribe(data => {
      alert('Mueble eliminado con éxito');
      this.muebles.splice(index, 1);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

}
