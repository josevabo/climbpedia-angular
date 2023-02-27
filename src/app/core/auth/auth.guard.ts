import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "./auth.service";
import {AlertService} from "../services/alert.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router, public alertService: AlertService){}
  canActivate():boolean{
    if (!this.authService.isAuthenticated()) {
      this.alertService.alertInfo("Você precisa realizar login para acessar o recurso")
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
