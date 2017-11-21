import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public auth: AuthService, private router: Router){}

  logout() {
    this.auth.logout().subscribe(data => {
      this.router.navigate(['login']);
    }, err => {
      alert('Error de conexion');
      // Mostrar mensaje error de conexion
    });
    }
}
