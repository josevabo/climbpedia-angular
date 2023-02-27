import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/auth/auth.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario!: any;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.getUsuarioFromToken();
    Object.keys(this.usuario).forEach((key: any) => {
      this.usuario[key] = this.getValueIfNotEmpty(this.usuario[key])
    });
    // console.log(this.usuario);
  }

  ngOnInit(): void {

  }

  getValueIfNotEmpty(value: any) {
    console.log("if not empty", value);
    value = (value && value.length && value !== "null") ? value : "Não Informado";
    return value
  }

}
