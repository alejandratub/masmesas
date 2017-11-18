import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router) { }
  updateCliente(cliente) {
    this.clienteService.updateCliente(cliente).subscribe(data => {
      alert('Cliente editado con éxito');
      this.router.navigate(['clientes']);
      console.log(data);
    }, err => {
      console.log(err);
      alert('Error de conexion');
      // Error de conexion
    });
  }

  ngOnInit() {
  }

}
