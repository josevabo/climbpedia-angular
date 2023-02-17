import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {LoadingService} from "../services/loading.service";
import {AlertService} from "../services/alert.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  constructor(private loadingService: LoadingService, private alertService: AlertService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequests == 0 ) {
      this.loadingService.show();
    }
    this.activeRequests++;

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            this.alertService.alertError("Erro: Você não tem permissão para realizar esta ação")
          } else if (error.status === 401) {
            this.alertService.alertError("Erro: Você deve estar logado para realizar esta ação")
          }
        return throwError(() => error)
      }),
      finalize(() => {
        this.activeRequests--;

        if (this.activeRequests == 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
