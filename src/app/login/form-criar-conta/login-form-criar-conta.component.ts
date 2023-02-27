import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";
import {Usuario} from "../../core/models/usuario.model";
import {ViasService} from "../../services/vias/vias.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../core/services/alert.service";

@Component({
  selector: 'app-form-criar-conta',
  templateUrl: './login-form-criar-conta.component.html',
  styleUrls: ['./login-form-criar-conta.component.scss']
})
export class LoginFormCriarContaComponent implements OnInit {
  usuario: Usuario = {
    nome: "",
    username: "",
    email: "",
    senha: ""
  };
  cidades: any = [];
  form: FormGroup;

  constructor(private authService: AuthService,
              private viasService: ViasService,
              private fb: FormBuilder,
              private alertService: AlertService) {
    this.form = this.fb.group({
      nome: ['',Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.required],
      senha: ['',Validators.required],
      dataNasc: ['',Validators.required],
      cidadeId: ['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.getCidades()
  }

  criarConta(): void {
    let novaConta = this.form.value;

    if (novaConta.nome
      && novaConta.username
      && novaConta.email
      && novaConta.senha
      && novaConta.dataNasc
      && novaConta.cidadeId) {

      novaConta.cidade = {id: novaConta.cidadeId}
      delete novaConta.cidadeId;

      this.authService.criarConta(novaConta).subscribe({
        next: () => {
          this.alertService.alertSuccess("Conta criada com sucesso! Realize login!");
        },
        error: () => {
          this.alertService.alertError("Falha ao criar conta. Por favor, tente novamente!");
        }
      })
    }
  }

  private getCidades(): void {
    this.viasService.getCidades().subscribe((cidades: any[]) => {
      this.cidades = cidades;
    });
  }
}
