import { SetoresService } from '../../services/setores/setores.service';
import { ViasService } from '../../services/vias/vias.service';
import { Via } from '../../core/models/via.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImagensService } from 'src/app/services/imagens/imagens.service';
import { ConquistadoresService } from 'src/app/services/conquistadores/conquistadores.service';
import { TiposViaService } from 'src/app/services/tipos-via/tipos-via.service';
import {AlertService} from "../../core/services/alert.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-vias-form-insert',
  templateUrl: './vias-form-insert.component.html',
  styleUrls: ['./vias-form-insert.component.scss']
})
export class ViasFormInsertComponent implements OnInit {
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

  viaInsertForm: any = null;

  constructor(
    private service: ViasService,
    private imagensService: ImagensService,
    private conquistadoresService: ConquistadoresService,
    private tiposViaService: TiposViaService,
    private setoresService: SetoresService,
    public dialogRef: MatDialogRef<ViasFormInsertComponent>,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.setoresService.getAllSetores().subscribe(response => {
      this.setores = response
    })
    this.imagensService.getAllImagens().subscribe(response => {
      this.imagens = response
    })

    this.viaInsertForm = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      setor: new FormControl('', Validators.required),
      graduacao: new FormControl('', Validators.required),
      tipoVia: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      urlCroqui: new FormControl(),
      imagem: new FormControl(),
      tags: new FormControl(),
      conquistador: new FormControl(),
      dtConquista: new FormControl(),
      extensao: new FormControl()
    });
  }
  insertVia() {
    if(!this.viaInsertForm.valid) {
      this.alertService.alertError("Preencha o formulário corretamente")
    }

    let viaPost = this.convertToVia(this.viaInsertForm)
    this.service.insertVia(viaPost)
      .subscribe({
      next: () => {
        this.alertService.alertSuccess("Via adicionada com sucesso!")
        this.dialogRef.close()
      },
      error: (error: any) => {
        console.log("Erro no insert via\n" + JSON.stringify(error.error))
        this.alertService.alertError("Não foi possível adicionar a via!")
        if(error.error.detail) this.alertService.multiAlertWarning(error.error.detail)
      }
    })
  }

  convertToVia(form: FormGroup): Via{
    let via = form.value
    via.setor = {"id": via.setor}
    via.conquistador = {"id": via.conquistador}
    via.tipoVia = {"id": via.tipoVia}
    via.imagem = {"id": via.imagem}
    return via;
  }
}

