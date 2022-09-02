import { ImagensService } from 'src/app/services/imagens/imagens.service';
import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/models/imagem.model';


@Component({
  selector: 'app-galeria-home',
  templateUrl: './galeria-home.component.html',
  styleUrls: ['./galeria-home.component.scss']
})
export class GaleriaHomeComponent implements OnInit {
  imagens: Imagem[] =[];

  constructor(private imagensService: ImagensService) {
    this.imagensService.getAllImagens().subscribe(
      imagens => {
        this.imagens = imagens
        console.log("imagens: ")
        console.log(imagens)
      })
   }

  ngOnInit(): void {
  }

}
