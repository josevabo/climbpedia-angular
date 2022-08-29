import { ImagensService } from 'src/app/services/imagens/imagens.service';
import { SetoresService } from './../services/setores/setores.service';
import { ViasService } from './../services/vias/vias.service';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViasComponent } from './card-vias/card-vias.component';
import { ViasHomeComponent } from './vias-home/vias-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ViasFormInsertComponent } from './vias-form-insert/vias-form-insert.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ViasDetailPageComponent } from './vias-detail-page/vias-detail-page.component';


@NgModule({
  declarations: [
    CardViasComponent,
    ViasHomeComponent,
    ViasFormInsertComponent,
    ViasDetailPageComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  exports: [
    CardViasComponent,
    ViasHomeComponent,
  ],
  providers: [
    // ViasService,
    // SetoresService,
    // ImagensService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [ViasHomeComponent]
})
export class ViasModule { }
