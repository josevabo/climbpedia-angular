import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
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
  private user$: BehaviorSubject<Usuario>;

  constructor(private httpClient: HttpClient) {
    this.user$ = new BehaviorSubject<Usuario>({username: ""})
  }

  getUsuario$(): Observable<Usuario> {
    return this.user$.asObservable();
  }

  criarConta(dadosNovaConta: any): Observable<any> {
    return this.httpClient.post(this.usuarioServiceUrl,dadosNovaConta);
  }

  login(email:string, password:string): Observable<any> {
     return new Observable<any>( (observer) => {
      this.httpClient.post(this.authServiceUrl,{username:email,password:password},{responseType:"json"})
          .subscribe({
            next: (token: any) => {
              this.saveTokenToLocalStorage(token);
              this.user$.next(this.getUsuarioFromToken())
              observer.next()
            },
            error: error => {
              console.log(error)
              observer.error(error)
            }
          })
      }
    )
  }

  private saveTokenToLocalStorage(token: any) {
    localStorage.setItem(this.accessTokenName, token[this.accessTokenName])
    localStorage.setItem(this.idTokenName, token[this.idTokenName])
    localStorage.setItem(this.refreshTokenName, token[this.refreshTokenName])
    localStorage.setItem(this.expiresAtName, token[this.expiresAtName])
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
