import { AuthTestService } from './../services/auth-test.service';
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MensagensService} from "../core/mensagens.service";

@Component({
  selector: 'login',
  template: `
<form [formGroup]="form">
    <fieldset>
        <legend>Login</legend>
        <div class="form-field">
            <label>Email:</label>
            <input name="email" formControlName="email">
        </div>
        <div class="form-field">
            <label>Password:</label>
            <input name="password" formControlName="password"
                   type="password">
        </div>
    </fieldset>
    <div class="form-buttons">
        <button class="button button-primary"
                (click)="login()">Login</button>
    </div>
</form>`})
export class LoginComponent {
    form:FormGroup;

    constructor(private fb:FormBuilder,
                 private authService: AuthService,
                 private router: Router,
                private mensagensService: MensagensService) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
      const val = this.form.value;

      if (val.email && val.password) {
        // console.log(this.authService.login(val.email, val.password, (result:any) => {}).then(result=> console.log(result)));
        console.log(this.authService.login(val.email, val.password, (result:any) => {}).subscribe(result=> console.log(result)));
        // console.log(this.authService.login(val.email, val.password, (result:any) => {
        //   if (result) this.router.navigateByUrl('/');
        //   else this.mensagensService.mensagemErro("Falha no Login. Por favor, tente novamente")
        // }))
        this.authService.login(val.email, val.password, (result:any) => {}).subscribe(result => {
          if (result) this.loginSuccess();
          else this.loginFail()
        })

      }
    }

    loginSuccess() {
      this.mensagensService.mensagemSuccess("Login bem sucedido!")
      this.router.navigateByUrl('/')
    }

    loginFail() {
      this.mensagensService.mensagemErro("Falha no Login.\n Por favor, tente novamente")
    }

    redirectLoginOidcProvider(){
      // window.location.href = 'http://localhost:54869/realms/quarkus/protocol/openid-connect/auth'
      //   + "?client_id=" + 'backend-service'
      //   + "&redirect_uri=" + "http%3A%2F%2Flocalhost%3A" + "4200"
      window.location.href = 'http://localhost:54869/realms/quarkus/protocol/openid-connect/auth?client_id=backend-service&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&response_type=code&response_mode=query&prompt=login'
    }
}

