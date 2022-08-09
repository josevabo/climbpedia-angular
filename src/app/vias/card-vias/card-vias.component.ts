import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card-vias',
  templateUrl: './card-vias.component.html',
  styleUrls: ['./card-vias.component.scss']
})
export class CardViasComponent implements OnInit {
  urlImg: string;
  urlImgDefault = "https://www.escaladas.com.br/img/dinamica/via/1033/principal/1033-160419-1.png";
  faHeart = faHeart;
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
