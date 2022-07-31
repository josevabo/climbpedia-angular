import { ViasService } from './services/vias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Climbpedia-angular';
  vias: any[];

  constructor(private service: ViasService) {
    this.vias = []
  }

  ngOnInit() {
    this.getAllVias()
    // this.vias = [
    //   {
    //     nome: "Via dos Italianos",
    //     descricao: "Via muito bonita no pao de acucar"
    //   },
    //   {
    //     nome: "K2",
    //     descricao: "Via linda no corcovado"
    //   }
    // ]
  }

  getAllVias() {
    return this.service.getAllVias().subscribe((vias: any[]) => {
      // console.log("iniciando appComponent ngOnInit, obetndo vias" + vias);
      this.vias = vias;
    })
  }
}
