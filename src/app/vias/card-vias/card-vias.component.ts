import { ViasService } from './../../services/vias.service';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card-vias',
  templateUrl: './card-vias.component.html',
  styleUrls: ['./card-vias.component.scss'],
  providers:[ViasService]
})
export class CardViasComponent implements OnInit {
  viasService: ViasService;
  userId = 123;
  urlImg: string;
  urlImgDefault = "https://www.escaladas.com.br/img/dinamica/via/1033/principal/1033-160419-1.png";
  isfavorite: boolean = false;
  faEmptyHeart = faEmptyHeart;
  faSolidHeart = faSolidHeart;
  @Input() via: any;

  constructor(viasService: ViasService) {
    this.viasService = viasService
    try{
      this.urlImg = this.via.imagem.url ? this.via.imagem.url : this.urlImgDefault;
    } catch (e) {
      this.urlImg = this.urlImgDefault;
    }
  }

  togglefavorite(){
    this.isfavorite ? this.removeFavorite() : this.addFavorite();
  }

  addFavorite() {
    this.viasService.addFavorite(this.via.id, this.userId).subscribe((response) => {
      if (response) this.isfavorite = true;
    })
  }

  removeFavorite() {
    this.viasService.removeFavorite(this.via.id, this.userId).subscribe((response) => {
      if (response) this.isfavorite = false;
    })
  }

  ngOnInit(): void {
  }

}

