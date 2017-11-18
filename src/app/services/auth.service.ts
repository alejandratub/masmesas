import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable()
export class AuthService {
  token: string;
  user: any;

  constructor(public http: HttpClient) {
    this.token = null;
  }
  login(credentials): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.post('http://localhost:3000/api/Users/login', credentials).subscribe(data => {
       this.user = data;
       this.token = this.user.id;
        observer.next(true);
        observer.complete();
      }, err => {
        observer.next(false);
        observer.complete();
      });
    });
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
  getToken() {
    return this.token;
  }
}
