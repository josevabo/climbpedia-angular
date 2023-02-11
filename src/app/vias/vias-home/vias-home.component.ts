import { ViasFormInsertComponent } from '../vias-form-insert/vias-form-insert.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ViasService } from '../../services/vias/vias.service';
import { Via } from '../../core/models/via.model';
import { AlertService } from 'src/app/core/services/alert.service';
import {AuthService} from "../../core/services/auth.service";
import {RetornoPaginado} from "../../core/models/retorno-paginado.model";
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-vias-home',
  templateUrl: './vias-home.component.html',
  styleUrls: ['./vias-home.component.scss']
})
export class ViasHomeComponent implements OnInit {
  length = 50;
  pageSize = 15;
  pageIndex = 0;
  pageSizeOptions = [10, 15, 25, 50];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  title = 'Vias';
  vias: Via[];
  search: string = ""
  constructor(private viasService: ViasService,
              private dialog: MatDialog,
              private alertService: AlertService,
              private authService: AuthService) {
    this.vias = []
  }

  ngOnInit() {
    this.getAllVias()
  }
  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getVias();
  }

  getVias(){
    console.log("texto pesquisado: " + this.search)
    this.viasService.getVias(this.pageIndex,this.pageSize, this.search).subscribe((retornoPaginado: RetornoPaginado<Via>) => {
      let vias = retornoPaginado.resultados;
      this.length = retornoPaginado.count;
      this.updateViasList(vias)
    })

  }

  getAllVias() {
    this.search = "";
    this.getVias()
  }

  updateViasList(vias: Via[]) {
    if (this.authService.isLoggedIn()) {
      this.getViasFavoritasByUsuario().subscribe({
        next: (viasFavoritasId: any[]) => {
          vias.forEach(via => {
            via.isFavorita = viasFavoritasId.includes(via.id);
          })
          this.vias = vias;
          this.alertService.alertSuccess("Busca realizada com sucesso!")
        },
        error: (error: any) => {
          vias.forEach(via => via.isFavorita = false)
          this.vias = vias;
          console.log(error)
          this.alertService.alertWarning("Não foi possível recuperar vias favoritas. Realize login e tente novamente", "")
        }
      })
    } else {
      this.vias = vias;
    }
  }

  getViasFavoritasByUsuario() {
    return this.viasService.getViasFavoritasIdsByUsuario()
  }

  openInsertDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "1000px";
    const dialogRef = this.dialog.open(ViasFormInsertComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado. Result = ', result);

      if(result) this.getAllVias();
    });
  }

}
