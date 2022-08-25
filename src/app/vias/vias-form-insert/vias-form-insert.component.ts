import { ViasService } from './../../services/vias.service';
import { Via } from './../../models/via.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vias-form-insert',
  templateUrl: './vias-form-insert.component.html',
  styleUrls: ['./vias-form-insert.component.scss']
})
export class ViasFormInsertComponent implements OnInit {
  via: Via = {}
  setores: any[] = [
    {id:1, nome: "Face Oeste Pao de Acucar"},
    {id:2, nome: "Pracinha do Grajau"},
    {id:3, nome: "Corcovado"},
  ];
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
  imagens: any[] = [
    {id:1, url: "teste url mockada no front"},
    {id:2, url: "teste url mockada no front"},
    {id:3, url: "teste url mockada no front"},
  ];

  constructor(private service: ViasService, public dialogRef: MatDialogRef<ViasFormInsertComponent>,
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
  }

  insertVia() {
    console.log("insert Via completa:", this.via)

    // const bodyTest = {
    //   nome: "Buracos 5, mockado dentro do form, chamando insert corretamente",
    //   setor: {id:2},
    //   graduacao:"V0",
    //   tipoVia: {id:2},
    //   urlCroqui:"url buracos",
    //   imagem:{id:2},
    //   tags:"#boulder",
    //   conquistador: {id:5},
    //   descricao:"Boulder bem da hora bom para iniciantes",
    //   dtConquista: null,
    //   extensao: 4
    // }
    // this.via = bodyTest
    let viaPost = this.via
    // viaPost = this.removeEmpty(viaPost)

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

