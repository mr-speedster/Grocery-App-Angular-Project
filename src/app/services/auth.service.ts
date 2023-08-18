import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_URL = 'https://orca-app-jhg4l.ondigitalocean.app/api/auth/';

  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param data 
   * @returns 
   */
  register(data: any): Observable<any> {
    return this.http.post<any>(this.AUTH_URL + 'register', data);
  }

  /**
   * 
   * @param data 

   * @returns 
   */
  login(data: any): Observable<any> {
    return this.http.post<any>(this.AUTH_URL + 'login', data);
  }

  logOut() {
    localStorage.clear();
  }

  /**
   * 
   * @returns {boolean}
   */
  checkToken(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
