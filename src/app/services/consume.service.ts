import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {
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

  register(reg: User): Observable<User> {
    return this.http.post<User>(`${this.urlBase}${environment.register}`, reg);
  }

  recover(email: string): Observable<string> {
    const data = {
      userEmail: email
    };
    return this.http.post<string>(`${this.urlBase}${environment.recover}`, data);
  }
}
