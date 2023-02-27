import {Component} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthService} from "../core/auth/auth.service";
import {AlertService} from "../core/services/alert.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginFormCriarContaComponent} from "./form-criar-conta/login-form-criar-conta.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form:FormGroup;
    constructor(private fb:FormBuilder,
                 private authService: AuthService,
                 private router: Router,
                private alertService: AlertService,
                private dialog: MatDialog) {

        this.form = this.fb.group({
            username: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
      const val = this.form.value;

      if (this.form.valid) {
        this.authService.login(val.username, val.password).subscribe({
          next: () => this.loginSuccess(),
          error: () => this.loginFail()
        })
      } else {
        this.alertService.alertWarning("Campos de login são obrigatórios!")
        this.highlightInvalidFields()
      }
    }

    openCriarContaDialog() {
      const dialogConfig: MatDialogConfig = {
        disableClose : true,
        autoFocus : true,
        width : "700px"
      }

      const dialogRef = this.dialog.open(LoginFormCriarContaComponent, dialogConfig);
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

