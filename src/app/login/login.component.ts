import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private auth: AuthService, private router: Router) { }
  login() {
    const credentials = {username: this.model.username, password: this.model.password};
    this.auth.login(credentials).subscribe(data => {
      if (data) {
        this.router.navigate(['principal']);
      } else {
        // Mostrar mensaje datos incorrectos
        console.log('Incorrecto');
      }
    }, err => {
      // Mostrar mensaje error de conexion
    });
  }

  ngOnInit() {
  }

}
