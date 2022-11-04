import { SetoresService } from '../../services/setores/setores.service';
import { ViasService } from '../../services/vias/vias.service';
import { Via } from '../../core/models/via.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImagensService } from 'src/app/services/imagens/imagens.service';
import { ConquistadoresService } from 'src/app/services/conquistadores/conquistadores.service';
import { TiposViaService } from 'src/app/services/tipos-via/tipos-via.service';

@Component({
  selector: 'app-vias-form-insert',
  templateUrl: './vias-form-insert.component.html',
  styleUrls: ['./vias-form-insert.component.scss']
})
export class ViasFormInsertComponent implements OnInit {
  via: Via = {}
  setores: any[] = [];
  tiposVia: any[] = [
    {id:1, nome: "Tradicional"},
    {id:2, nome: "Esportiva"},
    {id:3, nome: "Boulder"},
  ];
  conquistadores: any[] = [
    {id:1, nome: "Andre Ilha"},
    {id:2, nome: "Pedro Bugim"},
    {id:3, nome: "Tartari"},
    {id:4, nome: "Mockado"},
  ];
  imagens: any[] = [];


  constructor(
    private service: ViasService,
    private imagensService: ImagensService,
    private conquistadoresService: ConquistadoresService,
    private tiposViaService: TiposViaService,
    private setoresService: SetoresService,
    public dialogRef: MatDialogRef<ViasFormInsertComponent>
    ) {
    this.via.setor = {
      id: null
    }
    this.via.imagem = {
      id: null
    }
    this.via.conquistador = {
      id: null
    }
    this.via.tipoVia = {
      id: null
    }
  }

  ngOnInit(): void {
    this.setoresService.getAllSetores().subscribe(response => {
      this.setores = response
    })
    this.imagensService.getAllImagens().subscribe(response => {
      this.imagens = response
    })
  }

  insertVia() {
    console.log("insert Via completa:", this.via)
    let viaPost = this.via
    console.log(viaPost.dtConquista?.toLocaleString())
    // console.log(new Intl.DateTimeFormat().format(new Date(viaPost.dtConquista?)));
    console.log(typeof(viaPost.dtConquista))

    this.service.insertVia(viaPost).subscribe({
      next: response => {
        console.log("insertVias com sucesso")
        console.log(response)
      },
      error: err => {
        console.log("Erro no insert via\n" + JSON.stringify(err.error))
      }
    })

  }

  // removeEmpty(obj: any) {
  //   return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  // }
  // https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
  removeEmpty(obj: any): any {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v != null)
        .map(([k, v]) => [k, v === Object(v) ? this.removeEmpty(v) : v])
        .map(([k, v]) => [typeof(v) === 'object' && Object.keys(v).length == 0 ? delete obj[k] : v])
    );
    // return obj
  }

}

