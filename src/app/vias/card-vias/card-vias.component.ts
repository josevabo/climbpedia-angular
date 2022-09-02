import { ToastrService } from 'ngx-toastr';
import { ViasService } from './../../services/vias/vias.service';
import { faHeart as faSolidHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card-vias',
  templateUrl: './card-vias.component.html',
  styleUrls: ['./card-vias.component.scss'],
  providers:[ViasService]
})
export class CardViasComponent implements OnInit {
  userId = 1;
  // urlImg: string = "";
  urlImgDefault = "https://www.escaladas.com.br/img/dinamica/via/1033/principal/1033-160419-1.png";
  faEmptyHeart = faEmptyHeart;
  faSolidHeart = faSolidHeart;
  faPlus = faPlus;
  @Input() via: any;

  constructor(private viasService: ViasService, private toastr: ToastrService) {}

  ngOnInit(): void {
    if (this.isNullOrIdIsNull(this.via.imagem)) {
      this.via.imagem = {url: this.urlImgDefault}
    }
  }

  togglefavorite(){
    this.via.isFavorita ? this.removeFavorite() : this.addFavorite();
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
    this.via.isFavorita = favoriteStatus;
    this.toastr.success(toastMessage)
  }

  toggleFavoriteError(toastMessage: string, err: any){
    this.toastr.error(toastMessage)
    console.error(err)
  }

  isNullOrIdIsNull(obj: any){
    return obj == null || obj.id ==null
  }

}

