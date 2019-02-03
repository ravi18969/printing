import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, } from '@angular/common/http'
import { AuthService } from './app/shared/services/auth.service';
import { PrintingService } from 'app/printing.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  debugger;

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', authService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
  // intercept(req, next){
  //   const Token = localStorage.getItem("token");

  //   if (Token) {
  //     const cloned = req.clone({
  //         headers: req.headers.set("Authorization", Token)
  //     });

  //     return next.handle(cloned);
  //   }
  //   else {
  //     debugger
  //     return next.handle(req);
  //   }
  //   }
}
