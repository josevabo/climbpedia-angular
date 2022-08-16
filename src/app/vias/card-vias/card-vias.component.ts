import { ToastrService } from 'ngx-toastr';
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
  userId = 123;
  urlImg: string;
  urlImgDefault = "https://www.escaladas.com.br/img/dinamica/via/1033/principal/1033-160419-1.png";
  isfavorite: boolean = false;
  faEmptyHeart = faEmptyHeart;
  faSolidHeart = faSolidHeart;
  @Input() via: any;

  constructor(private viasService: ViasService, private toastr: ToastrService) {
    try {
      this.urlImg = this.via.imagem.url ? this.via.imagem.url : this.urlImgDefault;
    } catch (e) {
      this.urlImg = this.urlImgDefault;
    }
  }

  togglefavorite(){
    this.isfavorite ? this.removeFavorite() : this.addFavorite();
  }

  addFavorite() {
    this.viasService.addFavorite(this.via.id, this.userId).subscribe({
        next: (response) => {
          console.log("retorno addFavorito: ",response)
          return this.toggleFavoriteSuccess(true, "Adicionada aos favoritos com sucesso!")
        },
        error: (err)=> this.toggleFavoriteError("Falha ao adicionar aos favoritos!", err)
      })
    }

  removeFavorite() {
    this.viasService.removeFavorite(this.via.id, this.userId).subscribe({
      next: (response) => {
      console.log("retorno removeFavorito: ",response)
        return this.toggleFavoriteSuccess(false, "Removida dos favoritos com sucesso!")
      },
      error: (err)=>{
        this.toggleFavoriteError("Falha ao remover dos favoritos!", err)
      }
    })
  }

  toggleFavoriteSuccess(favoriteStatus: boolean, toastMessage: string){
    this.isfavorite = favoriteStatus;
    this.toastr.success(toastMessage)
  }

  toggleFavoriteError(toastMessage: string, err: any){
    this.toastr.error(toastMessage)
    console.error(err)
  }

  ngOnInit(): void {
  }

}

