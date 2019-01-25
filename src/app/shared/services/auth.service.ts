import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = "http://localhost:8000/api/auth/";
  uri = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient,
    private _router: Router) { }

    // registerUser(user) {
    //   return this.http.post<any>(this.uri, user)
    // }
  
    loginUser(user) {
      return this.http.post<any>(`${this.uri}/login`, user);
    }
  
    logoutUser() {
      localStorage.removeItem('token')
      this._router.navigate(['/events'])
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')    
    }
}
