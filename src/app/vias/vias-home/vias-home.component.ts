import { Component, OnInit } from '@angular/core';
import { ViasService } from '../../services/vias.service';
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
  constructor(private viasService: ViasService) {
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
    return this.viasService.getAllVias().subscribe((vias: Via[]) => {
      this.updateViasList(vias)
    })
  }

  updateViasList(vias: Via[]) {
    this.totalVias = vias.length;
    this.getViasFavoritasByUsuario().subscribe((viasFavoritasId: number[]) => {
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

}
