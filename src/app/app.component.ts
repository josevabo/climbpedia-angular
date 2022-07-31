import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'climbpedia-angular';

  vias: any[] = [
    {
      nome: "Via dos Italianos",
      descricao: "Via muito bonita no pao de acucar"
    },
    {
      nome: "K2",
      descricao: "Via linda no corcovado"
    }
  ]
}
