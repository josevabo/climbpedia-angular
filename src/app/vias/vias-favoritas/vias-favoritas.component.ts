import { ViasService } from './../../services/vias/vias.service';
import { Component, OnInit } from '@angular/core';
import { Via } from 'src/app/models/via.model';

@Component({
  selector: 'app-vias-favoritas',
  templateUrl: './vias-favoritas.component.html',
  styleUrls: ['./vias-favoritas.component.scss']
})
export class ViasFavoritasComponent implements OnInit {
  vias: Via[] = []

  constructor(private viasService: ViasService) { }

  ngOnInit(): void {
    this.viasService.getViasFavoritasByUsuario().subscribe(
      ids => console.log(ids)
    )
  }

}
