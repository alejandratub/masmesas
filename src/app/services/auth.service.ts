import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor() {
  }
  login() {
  }

  isAuthenticated(): boolean {
    return true;
  }
}
