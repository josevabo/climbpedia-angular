import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ViasService } from './../services/vias.service';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViasComponent } from './card-vias/card-vias.component';
import { ViasHomeComponent } from './vias-home/vias-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ViasFormInsertComponent } from './vias-form-insert/vias-form-insert.component';


@NgModule({
  declarations: [
    CardViasComponent,
    ViasHomeComponent,
    ViasFormInsertComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    CardViasComponent,
    ViasHomeComponent,
  ],
  providers: [ViasService],
  bootstrap: [ViasHomeComponent]
})
export class ViasModule { }
