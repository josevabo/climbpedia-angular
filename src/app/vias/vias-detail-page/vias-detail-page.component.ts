import { ViasService } from './../../services/vias/vias.service';
import { Via } from './../../models/via.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MensagensService} from "../../core/mensagens.service";

@Component({
  selector: 'app-vias-detail-page',
  templateUrl: './vias-detail-page.component.html',
  styleUrls: ['./vias-detail-page.component.scss']
})
export class ViasDetailPageComponent implements OnInit {
  via: Via;
  status?: number;
  readonly id: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private viasService: ViasService,   private route: ActivatedRoute, private mensagensService: MensagensService) {
    this.via = {};
  }

  getVia(){
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.viasService.getViaById(this.id).subscribe({
      next: (via) => { this.via = via; console.log("recebido como sucesso")},
      error:(err) => {
        this.status = err.status
        switch (this.status){
          case 401: this.mensagensService.mensagemErro(`Falha na autenticação. Erro de login: ${this.status}`);break;
          case 403: this.mensagensService.mensagemErro(`Usuário sem autorização de acesso ao recurso. Erro: ${this.status}`);break;
          case 500: this.mensagensService.mensagemErro(`Erro no servidor: ${this.status}`);break;
          default: this.mensagensService.mensagemErro(`Erro na consulta: ${this.status}`);
        }
      }
    })
  }

  ngOnInit(): void {
    this.getVia()
  }

  isEmpty(via: any): boolean {
    return Object.keys(via).length > 0
  }

}
