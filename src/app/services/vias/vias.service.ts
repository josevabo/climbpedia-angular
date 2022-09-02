import { Via } from './../../models/via.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViasService {


  private readonly viasEndpoint = environment.apiEndpointUrl + "/vias"
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

  addFavorite(viaId: number, userId: number): Observable<any> {
    return this.httpClient.post<any>(this.viasEndpoint + "/favoritos/" + viaId, null);
    let mocked = true
    return of(mocked)
  }

  getViasFavoritasIdsByUsuario() {
    const url = this.viasEndpoint + "/favoritos/ids"
    // let params = new HttpParams()
    const usuarioId = 1;
    // params = params.append('usuario', usuarioId);
    return this.httpClient.get<any[]>(url + "?usuario=" + usuarioId)
  }

  getViasFavoritasByUsuario() {
    const url = this.viasEndpoint + "/favoritos"
    // let params = new HttpParams()
    const usuarioId = 1;
    // params = params.append('usuario', usuarioId);
    return this.httpClient.get<any[]>(url + "?usuario=" + usuarioId)
  }

  removeFavorite(viaId: number, userId: number): Observable<any> {
    return this.httpClient.delete<any>(this.viasEndpoint + "/favoritos/" + viaId);
    // let mocked = true
    // return of(mocked)
  }

  setViaFavorita() {
    this.vias.forEach((via)=>{
      via.isFavorita = this.viasFavoritasIdList.includes(via.id) ? true : false;
    })
  }

  insertVia(via: Via): Observable<any> {
    console.log("Executando insertVia:")
    console.log(via)
    return this.httpClient.post<any[]>(this.viasEndpoint, via)

  }

}
