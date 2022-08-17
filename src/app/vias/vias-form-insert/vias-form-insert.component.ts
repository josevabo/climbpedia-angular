import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vias-form-insert',
  templateUrl: './vias-form-insert.component.html',
  styleUrls: ['./vias-form-insert.component.scss']
})
export class ViasFormInsertComponent implements OnInit {
  nome: string;

  constructor() {
    this.nome="";
  }

  ngOnInit(): void {
  }

  insertVia() {
    console.log("From inserir nome: ", this.nome)
  }


}
