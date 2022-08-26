import { ViasFormInsertComponent } from './../vias-form-insert/vias-form-insert.component';
import { CardViasComponent } from './../card-vias/card-vias.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ViasService } from '../../services/vias/vias.service';
import { Via } from '../../models/via.model';


@Component({
  selector: 'app-vias-home',
  templateUrl: './vias-home.component.html',
  styleUrls: ['./vias-home.component.scss']
})
export class ViasHomeComponent implements OnInit {

  title = 'Vias';
  vias: Via[];
  totalVias: number = 0;
  search: string = ""
  constructor(private viasService: ViasService, private dialog: MatDialog) {
    this.vias = []
  }

  ngOnInit() {
    this.getAllVias()
  }

  searchVias(){
    console.log("texto pesquisado: " + this.search)
    this.viasService.findViasByText(this.search).subscribe((vias: Via[]) => {
      this.updateViasList(vias)
    })

  }

  getAllVias() {
    this.search = "";
    return this.viasService.getAllVias().subscribe((vias: Via[]) => {
      this.updateViasList(vias)
    })
  }

  updateViasList(vias: Via[]) {
    this.totalVias = vias.length;
    this.getViasFavoritasByUsuario().subscribe((viasFavoritasId: any[]) => {
      vias.forEach(via => {
        via.isFavorita = viasFavoritasId.includes(via.id) ? true : false
      })
      this.vias = vias;
      console.log("Update vias:")
      console.log(this.vias)
    })
  }

  getViasFavoritasByUsuario() {
    return this.viasService.getViasFavoritasByUsuario()
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
