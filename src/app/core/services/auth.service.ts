import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";
import {Usuario} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authServiceUrl: string = environment.authServiceUrl;
  usuarioServiceUrl: string = environment.apiEndpointUrl + "/usuarios"; //
  accessTokenName: string = "access_token"
  idTokenName: string = "id_token"
  refreshTokenName: string = "refresh_token"
  expiresAtName: string = "expires_at"

  constructor(private httpClient: HttpClient) { }

  criarConta(dadosNovaConta: any): Observable<any> {
    return this.httpClient.post(this.usuarioServiceUrl,dadosNovaConta);
  }

  login(email:string, password:string): Observable<any> {
     return new Observable<any>( (observer) => {
      this.httpClient.post(this.authServiceUrl,{username:email,password:password},{responseType:"json"})
          .subscribe({
            next: (token: any) => {
              console.log(token)
              localStorage.setItem(this.accessTokenName, token[this.accessTokenName])
              localStorage.setItem(this.idTokenName, token[this.idTokenName])
              localStorage.setItem(this.refreshTokenName, token[this.refreshTokenName])
              localStorage.setItem(this.expiresAtName, token[this.expiresAtName])

              const idTokenDecoded = this.decodeToken(token[this.idTokenName]);
              observer.next(idTokenDecoded)
            },
            error: error => {
              console.log(error)
              observer.next(false)
            }
          })
      }
    )
  }

  refreshToken() {
    return null;
  }

  logout() {
    localStorage.removeItem(this.accessTokenName)
    localStorage.removeItem(this.idTokenName)
    localStorage.removeItem(this.refreshTokenName)
    localStorage.removeItem(this.expiresAtName)
  }

  isLoggedIn(): boolean {
      return !this.isTokenExpired()
  }

  private isTokenExpired(): boolean {
      let expireAt = Number(localStorage.getItem(this.expiresAtName))
      return (Math.floor((new Date).getTime() / 1000)) >= expireAt;
  }

  decodeToken(token: string): string {
    return jwtDecode(token)
  }

  getUserName(): String | undefined {
    const idToken = localStorage.getItem(this.idTokenName);
    if(idToken) return this.decodeToken(idToken);
    else return undefined;
  }

  getUsuarioFromToken(): Usuario {
    if (this.isLoggedIn()) {
      const idToken: any = this.decodeToken(localStorage.getItem(this.idTokenName) as string)
      return {
        nome: idToken.full_name,
        username: idToken.upn,
        dataNasc: idToken.birthdate,
        email: idToken.email
      }
    }
    throw new Error("Usuário não logado!")
  }
}
