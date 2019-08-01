import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlBase = environment.urlBase;
  constructor(
    private http: HttpClient
  ) { }

  login(nickname: string, email: string): Observable<Login> {
    const data = {
      userAlias: nickname,
      userEmail: email
    };
    return this.http.post<Login>(`${this.urlBase}${environment.login}`, data);
  }

  register(reg: Register): Observable<Register> {
    return this.http.post<Register>(`${this.urlBase}${environment.register}`, reg);
  }
}
