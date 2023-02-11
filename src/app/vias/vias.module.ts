import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
import { ViasFavoritasComponent } from './vias-favoritas/vias-favoritas.component';
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    CardViasComponent,
    ViasHomeComponent,
    ViasFormInsertComponent,
    ViasDetailPageComponent,
    ViasFavoritasComponent,
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
        MatDatepickerModule,
        RouterModule,
        MatPaginatorModule
    ],
  exports: [
    CardViasComponent,
    ViasHomeComponent,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: class CustomMatPaginator extends MatPaginatorIntl {
        override firstPageLabel: string = 'Primeira página';
        override getRangeLabel =  (page: number, pageSize: number, length: number): string => {
          page = page + 1;
          let first = (page - 1) * (pageSize - 1) + 1;
          let last = page * pageSize > length ? length : page * pageSize;
          return first + " a " + last + " de " + length;
        }
        override itemsPerPageLabel: string = "Itens por página:"
        override lastPageLabel: string = "Última página"
        override nextPageLabel: string = "próxima página";
        override previousPageLabel: string = "Página anterior"
     }}
  ],
  bootstrap: [ViasHomeComponent]
})
export class ViasModule { }
