import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {
  authUrl = environment.authServiceUrl
  constructor(private http: HttpClient) { }

  login(email: any, password: any): Observable<any> {
    return this.http.post<any>(this.authUrl + '/loginInterno', {email, password})
      .pipe(
        tap(res => {
          this.setSession(res);
        }),
        shareReplay(1)
      )
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      let expiration = localStorage.getItem("expires_at");
      if (expiration == null) expiration = "0"
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }


}
