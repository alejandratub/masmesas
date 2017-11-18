import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  token: string;

  constructor(public http: HttpClient) {
    this.token = null;
  }
  login(credentials) {
    return this.http.post('http://localhost:3000/api/Users/login', credentials).subscribe(data => this.token = data.id);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
  getToken() {
    return this.token;
  }
}
