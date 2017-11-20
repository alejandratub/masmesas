import { Component, OnInit } from '@angular/core';
import {Decoracion} from "../../models/decoracion";
import {DecoracionsService} from "../../services/decoracion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-decoracion',
  templateUrl: './agregar-decoracion.component.html',
  styleUrls: ['./agregar-decoracion.component.css']
})
export class AgregarDecoracionComponent implements OnInit {

  decoracion: Decoracion;

  constructor(private decoracionService: DecoracionsService,  private router: Router) {
    this.decoracion = new Decoracion();
  }
  addDecoracion() {
    this.decoracionService.addDecoracion(this.decoracion).subscribe(data => {
      console.log(data);
      alert('Decoracion creada con éxito');
      this.router.navigate(['decoracion']);
    }, err => {
      console.log(err);
      // Error de conexion
    });
  }
  ngOnInit() {
  }

}
