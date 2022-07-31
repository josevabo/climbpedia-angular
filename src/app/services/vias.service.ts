import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViasService {

  private url = environment.apiEndpointUrl
  viasList: any[];

  constructor(private httpClient: HttpClient) {
    this.viasList = []
  }

  getAllVias(): Observable<any[]> {
    const endpoint = this.url + "/vias"
    return this.httpClient.get<any[]>(endpoint)
  }
}
