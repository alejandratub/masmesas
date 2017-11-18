import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class AuthService {
  token: string;

  constructor(private api: ApiService) {
    this.token = null;
  }
  login(credentials) {
    this.api.post('login', credentials);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
  getToken() {
    return this.token;
  }
}
