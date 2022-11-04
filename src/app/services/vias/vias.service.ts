import { Via } from '../../core/models/via.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViasService {

  private readonly AUTH_HEADER = {'Authorization': ''}; // credentials will be set by interceptor
  private readonly viasEndpoint = environment.apiEndpointUrl + "/vias"
  private readonly cidadesEndpoint = environment.apiEndpointUrl + "/cidades"
  vias: Via[];
  viasFavoritasIdList: any[];


  constructor(private httpClient: HttpClient) {
    this.vias = []
    this.viasFavoritasIdList = []
  }

  getAllVias(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.viasEndpoint)
  }

  getViaById(id: number) {
    console.log("getViaById:" + id)
    return this.httpClient.get<Via>(this.viasEndpoint + "/" + id)
  }

  findViasByText(search: string) {
    let params = new HttpParams()
    params = params.append('search', search);

    return this.httpClient.get<any[]>(this.viasEndpoint, {params:params})
  }

  addFavorite(viaId: number): Observable<any> {
    return this.httpClient.post<any>(this.viasEndpoint + "/favoritos/" + viaId, null, {headers: this.AUTH_HEADER});
  }

  getViasFavoritasIdsByUsuario() {
    const url = this.viasEndpoint + "/favoritos/ids"
    return this.httpClient.get<any[]>(url, {headers: this.AUTH_HEADER})
  }

  getViasFavoritasByUsuario() {
    const url = this.viasEndpoint + "/favoritos"
    const usuarioId = 1;
    return this.httpClient.get<any[]>(url + "?usuario=" + usuarioId, {headers: this.AUTH_HEADER})
  }

  removeFavorite(viaId: number): Observable<any> {
    return this.httpClient.delete<any>(this.viasEndpoint + "/favoritos/" + viaId, {headers: this.AUTH_HEADER});
  }

  setViaFavorita() {
    this.vias.forEach((via)=>{
      via.isFavorita = this.viasFavoritasIdList.includes(via.id);
    })
  }

  insertVia(via: Via): Observable<any> {
    console.log("Executando insertVia:")
    console.log(via)
    return this.httpClient.post<any[]>(this.viasEndpoint, via, {headers: this.AUTH_HEADER})
  }

  getCidades(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.cidadesEndpoint);
  }
}
