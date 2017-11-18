import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  constructor(private auth: AuthService) { }
  login() {
    const credentials = {username: this.model.username, password: this.model.password};
    console.log(credentials);
    this.auth.login(credentials);
  }

  ngOnInit() {
  }

}
