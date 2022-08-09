import { Component, OnInit } from '@angular/core';
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
  search: string = ""
  constructor(private service: ViasService) {
    this.vias = []
  }

  ngOnInit() {
    this.getAllVias()
  }

  searchVias(){
    console.log("texto pesquisado: " + this.search)
    this.service.findViasByText(this.search).subscribe((vias: any[]) => {
      this.updateViasList(vias)
    })

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
