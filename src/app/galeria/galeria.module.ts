import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaHomeComponent } from './galeria-home/galeria-home.component';

const ROUTES: Routes = [
  {path: '', component: GaleriaHomeComponent}
];

@NgModule({
  declarations: [
    GaleriaHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class GaleriaModule { }
