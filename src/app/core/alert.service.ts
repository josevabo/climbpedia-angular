import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private defaultTimeOut: number = 2000;

  constructor(public toastr: ToastrService) { }

  alertError(msg: string, title: string = "Erro!", timeOut: number = this.defaultTimeOut){
    this.toastr.error(msg, title,{timeOut: timeOut})
    console.error(title +"=> " + msg)
  }

  alertSuccess(msg: string, title: string = "Sucesso!", timeOut: number = this.defaultTimeOut){
    this.toastr.success(msg, title,{timeOut: timeOut})
    console.log(title +"=> " + msg)
  }

  alertWarning(msg: string, title: string = "Atenção!", timeOut: number = this.defaultTimeOut){
    this.toastr.warning(msg, title,{timeOut: timeOut})
    console.warn(title +"=> " + msg)
  }

  alertInfo(msg: string, title: string = "Info", timeOut: number = this.defaultTimeOut){
    this.toastr.info(msg, title,{timeOut: timeOut})
  }
  alertShow(msg: string, title: string = "Info", timeOut: number = this.defaultTimeOut){
    this.toastr.show(msg, title,{timeOut: timeOut})
  }
}
