import { Component, OnInit } from '@angular/core';
import {Usuario} from "../core/models/usuario.model";
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario!: Usuario;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.getUsuarioFromToken();
    console.log(this.usuario);
  }

  ngOnInit(): void {
  }

}
