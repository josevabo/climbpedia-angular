import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SetoresService {

  private readonly setoresEndpoint = environment.apiEndpointUrl + "/setores"
  setores: any[];

  constructor(private httpClient: HttpClient) {
    this.setores = []
  }

  getAllSetores(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.setoresEndpoint)
  }

}
