import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor() {
    this.token = null;
  }
  login() {
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
