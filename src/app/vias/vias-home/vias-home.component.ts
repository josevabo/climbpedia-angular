import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { ViasService } from '../../services/vias.service';

@Component({
  selector: 'app-vias-home',
  templateUrl: './vias-home.component.html',
  styleUrls: ['./vias-home.component.scss']
})
export class ViasHomeComponent implements OnInit {

  title = 'Vias';
  vias: any[];
  totalVias: number = 0;
  search: String = ""
  constructor(private service: ViasService) {
    this.vias = []
  }

  ngOnInit() {
    this.getAllVias()
  }

  searchVias(){
    console.log("texto pesquisado: " + this.search)
    const viasResult = this.service.findViasByText(this.search)
    this.updateViasList(viasResult)

    console.log(viasResult)
  }

  getAllVias() {
    return this.service.getAllVias().subscribe((vias: any[]) => {
      this.updateViasList(vias)
      console.log("Executando getAllVias :")
      console.table(vias)
    })
  }

  updateViasList(vias: any[]) {
    this.vias = vias;
    this.totalVias = vias.length;
  }
}
