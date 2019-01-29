import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild , ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  public authToken;
  private isAuthenticated = true; // Set this value dynamically
  private isCreated = false;
  
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.loggedIn()) {
      return true
    }
    this.router.navigate(['/sessions/signin']);
    return false;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isCreated) {
      return true
    }
    this.router.navigate(['/job/create-job']);
    return false;
  }  
}
