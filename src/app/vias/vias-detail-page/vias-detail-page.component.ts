import { Via } from './../../models/via.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vias-detail-page',
  templateUrl: './vias-detail-page.component.html',
  styleUrls: ['./vias-detail-page.component.scss']
})
export class ViasDetailPageComponent implements OnInit {

  @Input() via: any;
  constructor() {
    //stub
    this.via = {
      "id": 1,
      "conquistador": {
          "id": 1,
          "nome": "Andre Ilha",
          "dataNasc": "1970-01-01T03:00:00.000+00:00",
          "cidadeId": 1
      },
      "descricao": "Via linda, n├úo muito longa. Crux exige m├│vel como prote├º├úo para iniciantes",
      "dtConquista": null,
      "extensao": null,
      "imagem": {
          "id": 2,
          "legenda": "Foto Corcovado",
          "url": "https://static.wixstatic.com/media/4cf148_186b75eaa64f4430a75af9e5e9bfb735.png/v1/fill/w_250,h_187,al_c,q_95,enc_auto/4cf148_186b75eaa64f4430a75af9e5e9bfb735.png"
      },
      "graduacao": "3 grau D3 E2",
      "nome": "K2",
      "setor": {
          "id": 2,
          "nome": "Corcovado",
          "descricao": "Montanha do corcovado. Vias fixas, mas maioria exige m├│vel",
          "cidade": {
              "id": 1,
              "nome": "Rio de Janeiro",
              "uf": "RJ"
          },
          "geolocalizacao": null
      },
      "tags": "#top100#movelopcional",
      "tipoVia": {
          "id": 1,
          "nome": "Tradicional",
          "descricao": "Vias de estilo mais cl├íssicos, demandam mais de uma cordada para alcan├ºar o fim"
      },
      "urlCroqui": "---www.urlteste.climb.com"
    }
  }

  ngOnInit(): void {
  }

}
