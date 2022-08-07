import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vias',
  templateUrl: './card-vias.component.html',
  styleUrls: ['./card-vias.component.scss']
})
export class CardViasComponent implements OnInit {
  // via = {
  //   nome:"",
  //   descricao:""
  // }
  urlImg: string;
  urlImgDefault = "https://www.escaladas.com.br/img/dinamica/via/1033/principal/1033-160419-1.png";
  @Input() via: any;

  constructor() {
    try{
      this.urlImg = this.via.imagem.url ? this.via.imagem.url : this.urlImgDefault;
    } catch (e) {
      this.urlImg = this.urlImgDefault;
    }

  }

  ngOnInit(): void {
  }

}
