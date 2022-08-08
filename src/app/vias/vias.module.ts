// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViasComponent } from './card-vias/card-vias.component';
import { ViasHomeComponent } from './vias-home/vias-home.component';

@NgModule({
  declarations: [
    CardViasComponent,
    ViasHomeComponent
  ],
  imports: [
    CommonModule,
  //   RouterModule.forChild([
  //     {path: "card", component: CardViasComponent}
  //   ])
  ],
  exports: [
    CardViasComponent,
    ViasHomeComponent,
  ],
  bootstrap: [ViasHomeComponent]
})
export class ViasModule { }
