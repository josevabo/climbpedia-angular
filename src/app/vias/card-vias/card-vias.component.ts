import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vias',
  templateUrl: './card-vias.component.html',
  styleUrls: ['./card-vias.component.scss']
})
export class CardViasComponent implements OnInit {
  // via = {
  //   nome:"",
  //   descricao:""
  // }

  @Input() via: any;

  constructor() { }

  ngOnInit(): void {
  }

}
