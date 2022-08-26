import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagensService {

  private readonly imagensEndpoint = environment.apiEndpointUrl + "/imagens"
  imagens: any[];

  constructor(private httpClient: HttpClient) {
    this.imagens = []
  }

  getAllImagens(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.imagensEndpoint)
  }

}
