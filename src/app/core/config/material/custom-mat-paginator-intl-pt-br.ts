import {MatPaginatorIntl} from "@angular/material/paginator";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomMatPaginatorIntlPtBr extends MatPaginatorIntl {
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
}
