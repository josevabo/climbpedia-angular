import { ViasService } from '../../services/vias/vias.service';
import { Component, OnInit } from '@angular/core';
import { Via } from 'src/app/core/models/via.model';
import {HttpErrorResponse} from "@angular/common/http";
import {AlertService} from "../../core/services/alert.service";
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: 'app-vias-favoritas',
  templateUrl: './vias-favoritas.component.html',
  styleUrls: ['./vias-favoritas.component.scss']
})
export class ViasFavoritasComponent implements OnInit {
  vias: Via[] = []
  isLoggedIn: boolean = false;
  constructor(private viasService: ViasService, private alertService: AlertService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.viasService.getViasFavoritasByUsuario().subscribe({
      next: vias => {
        vias.forEach(via => via.isFavorita = true)
        this.vias = vias
      },
      error: error => {
        console.log(error)
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) this.alertService.alertWarning("Necessário login para ver favoritos!")
        }
      }
    })
  }

}
