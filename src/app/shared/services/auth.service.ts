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
    private router: Router) { }

    registerUser(user) {
      console.log(user);
      return this.http.post<any>(`${this.uri}/register`, user)
    }
  
    loginUser(user) {
      return this.http.post<any>(`${this.uri}/login`, user);
    }
  
    logoutUser() {
      localStorage.removeItem('token')
      localStorage.removeItem('userRole');
      this.router.navigate(['/sessions/signin'])
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')    
    }

    getUsers() {
      return this.http.get(`${this.uri}/getUsers`);
    }

}
