import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class AuthService {
  token: string;
  constructor(private apiService: ApiService) {
    this.token = null;
  }
  public isAuthenticated(): boolean {
    return !!this.token ? true : false;
  }
  public login(credentials) {
    return this.apiService.post('login', credentials);
  }
}
