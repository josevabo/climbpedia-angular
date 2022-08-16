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
      console.log("Executando getAllVias :")
      console.table(vias)
    })
  }

  updateViasList(vias: Via[]) {
    this.vias = vias;
    this.totalVias = vias.length;
  }

  getViasFavoritasByUsuario() {
    this.viasService.getViasFavoritasByUsuario().subscribe((viasFavoritasId: number[]) => {
      return viasFavoritasId;
    })
  }

  // setViaFavorita() {
  //   this.vias.forEach((via)=>{
  //     via.isFavorita = this.viasIdFavoritasList.includes(via.id) ? true : false;
  //   })
  // }
}
