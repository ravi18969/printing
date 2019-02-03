import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = "http://localhost:8000/api/auth/";
  uri = 'http://localhost:8000/api/auth';
  options = new HttpHeaders().set('Authorization', localStorage.getItem('token'))


  constructor(private http: HttpClient,
    private router: Router) { }

    registerUser(user) {
      return this.http.post<any>(`${this.uri}/register`, user)
    }
  
    loginUser(user) {
      return this.http.post<any>(`${this.uri}/login`, user);
    }
  
    logoutUser() {
      localStorage.removeItem('token')
      localStorage.removeItem('userRole');
      localStorage.removeItem('name');
      this.router.navigate(['/sessions/signin'])
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')    
    }

    getUsers() {
      return this.http.get(`${this.uri}/getUsers`, {headers: this.options});
    }

    changeStatus(id:string, status) {
      let userStatus = {
        status: status
      }
      return this.http.post(`${this.uri}/changeUserStatus/${id}`, userStatus, {headers: this.options});
    }

    changeRole(id, role) {
      let userRole = {
        role: role
      }
      return this.http.post(`${this.uri}/changeUserRole/${id}`, userRole , {headers: this.options});
    }

    deleteUser(id) {
      return this.http.get(`${this.uri}/deleteUser/${id}`, {headers: this.options});
    }

}
