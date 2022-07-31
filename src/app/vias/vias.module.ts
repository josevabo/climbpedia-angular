import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViasComponent } from './card-vias/card-vias.component';



@NgModule({
  declarations: [
    CardViasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardViasComponent
  ]
})
export class ViasModule { }
