import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + accessToken)
      });

      console.log("request capturada e token setado no Authorization")

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}

