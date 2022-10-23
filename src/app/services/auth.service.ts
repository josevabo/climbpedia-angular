import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {observable, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authServiceUrl: string = environment.authServiceUrl;
  private _isLoggedIn: boolean = false;
  accessTokenName: string = "accessToken"

  constructor(private httpClient: HttpClient) { }

  login(email:string, password:string, callback:Function): Observable<boolean> {
     const observable = new Observable<boolean>( (observer) => {
      this.httpClient.post(this.authServiceUrl,{username:email,password:password},{responseType:"text"})
          .subscribe(
            accessToken => {
              console.log(accessToken)
              localStorage.setItem('accessToken',accessToken)
              this._isLoggedIn = true
              console.log(this.isLoggedIn())
              observer.next(this.isLoggedIn())
              // callback(this.isLoggedIn())
            },
            error => {
              console.log(error)
              observer.next(false)
            }
          )
      }
    )

    return observable;
  }

  refreshToken() {
    return null;
  }

  logout() {
    localStorage.removeItem(this.accessTokenName)
    this._isLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
