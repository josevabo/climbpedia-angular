import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public toastr: ToastrService) { }

  alertError(msg: string, title: string = "Erro!"){
    this.toastr.error(msg, title)
    console.error(title +"=> " + msg)
  }

  alertSuccess(msg: string, title: string = "Sucesso!"){
    this.toastr.success(msg, title)
    console.log(title +"=> " + msg)
  }

  alertWarning(msg: string, title: string = "Atenção!"){
    this.toastr.warning(msg, title)
    console.warn(title +"=> " + msg)
  }
}
