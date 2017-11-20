import { Component, OnInit } from '@angular/core';
import {MueblesService} from "../../services/muebles.service";
import {Router} from "@angular/router";
import {Mueble} from "../../models/muebles";

@Component({
  selector: 'app-editar-mueble',
  templateUrl: './editar-mueble.component.html',
  styleUrls: ['./editar-mueble.component.css']
})
export class EditarMuebleComponent implements OnInit {
  muebles: Mueble;
  constructor(private mueblesService: MueblesService, private router: Router) {
  }

  updateMueble() {
    this.mueblesService.updateMueble(this.muebles).subscribe(data => {
      alert('Mueble editado con éxito');
      this.router.navigate(['muebles']);
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

  ngOnInit() {
    this.muebles = this.mueblesService.getLocalMueble();
  }

}
