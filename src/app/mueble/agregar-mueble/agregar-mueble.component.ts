import { Component, OnInit } from '@angular/core';
import {Mueble} from "../../models/muebles";
import {MueblesService} from "../../services/muebles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-mueble',
  templateUrl: './agregar-mueble.component.html',
  styleUrls: ['./agregar-mueble.component.css']
})
export class AgregarMuebleComponent implements OnInit {

 mueble: Mueble;

  constructor(private muebleService: MueblesService,  private router: Router) {
    this.mueble = new Mueble();
  }
  addMueble() {
    this.muebleService.addMueble(this.mueble).subscribe(data => {
      console.log(data);
      alert('Mueble creado con éxito');
      this.router.navigate(['muebles']);
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }

  ngOnInit() {
  }

}
