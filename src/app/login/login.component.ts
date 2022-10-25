import {Component, EventEmitter, Output} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthService} from "../services/auth.service";
import {AlertService} from "../core/alert.service";

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
    @Output() onUsernameChange = new EventEmitter<String>()

    constructor(private fb:FormBuilder,
                 private authService: AuthService,
                 private router: Router,
                private alertService: AlertService) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
      const val = this.form.value;

      if (val.email && val.password) {
        this.authService.login(val.email, val.password).subscribe({
          next: idToken => {
            if (idToken) {
              this.loginSuccess();
              let username = idToken.full_name;
              this.onUsernameChange.emit(username)
            }
            else this.loginFail()
          },
          error: error => this.loginFail()
        })
      } else {
        this.alertService.alertWarning("Campos de login são obrigatórios!")
        this.highlightInvalidFields()
      }
    }

    private loginSuccess() {
      this.alertService.alertSuccess("Login bem sucedido!")
      this.router.navigateByUrl('/')
    }

    private loginFail() {
      this.alertService.alertError("Falha no Login. Por favor, tente novamente")
    }

    private highlightInvalidFields() {
      // TODO: criar estrutura para destacar apenas campos invalidos
      // usar classes css, estudar validadores
    }
  }

