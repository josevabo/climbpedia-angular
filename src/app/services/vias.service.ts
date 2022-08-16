import { Via } from './../models/via.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViasService {

  private readonly endpoint = environment.apiEndpointUrl + "/vias"
  vias: Via[];
  viasFavoritasIdList: number[];


  constructor(private httpClient: HttpClient) {
    this.vias = []
    this.viasFavoritasIdList = []
  }

  getAllVias(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endpoint)
  }

  findViasByText(search: string) {
    // const resultStub = [{"id":1,"nome":"K2","setor":{"id":2,"nome":"Corcovado","descricao":"Montanha do corcovado. Vias fixas, mas maioria exige m├│vel","cidadeId":1,"geolocalizacao":null},"graduacao":"3 grau D3 E2","tipoVia":{"id":1,"nome":"Tradicional","descricao":"Vias de estilo mais cl├íssicos, demandam mais de uma cordada para alcan├ºar o fim"},"urlCroqui":"---www.urlteste.climb.com","imagem":{"id":2,"legenda":"Foto Corcovado","url":"https://static.wixstatic.com/media/4cf148_186b75eaa64f4430a75af9e5e9bfb735.png/v1/fill/w_250,h_187,al_c,q_95,enc_auto/4cf148_186b75eaa64f4430a75af9e5e9bfb735.png"},"tags":"#top100#movelopcional","conquistador":{"id":1,"nome":"Andre Ilha","dataNasc":"1970-01-01T03:00:00.000+00:00","cidadeId":1},"descricao":"Via linda, n├úo muito longa. Crux exige m├│vel como prote├º├úo para iniciantes","dtConquista":null,"extensao":null},{"id":2,"nome":"Secundo","setor":{"id":1,"nome":"Face Oeste Pao de Acucar","descricao":"Face Oeste PAo de acucar, vias de 4┬║ a 8┬║ grau","cidadeId":1,"geolocalizacao":null},"graduacao":"3 grau D3 E2","tipoVia":{"id":1,"nome":"Tradicional","descricao":"Vias de estilo mais cl├íssicos, demandam mais de uma cordada para alcan├ºar o fim"},"urlCroqui":"https://www.escaladasclassicas.com/escalada-cavalo-louco-pao-de-acucar-urca","imagem":{"id":9,"legenda":"Via Secundo","url":"http://1.bp.blogspot.com/-BGjuRTjrdKE/VOXpwYfg2YI/AAAAAAAAFGA/YjFxRgRbok0/s1600/italianos_ROUTE.jpg"},"tags":"#top100#movel","conquistador":{"id":5,"nome":"Pedro Bugim","dataNasc":"1979-12-31T03:00:00.000+00:00","cidadeId":1},"descricao":"Secundo é feita na sequencia da italianos","dtConquista":"01/01/2022","extensao":120},{"id":3,"nome":"Via dos Italianos","setor":{"id":1,"nome":"Face Oeste Pao de Acucar","descricao":"Face Oeste PAo de acucar, vias de 4┬║ a 8┬║ grau","cidadeId":1,"geolocalizacao":null},"graduacao":"5 grau D3 E2","tipoVia":{"id":1,"nome":"Tradicional","descricao":"Vias de estilo mais cl├íssicos, demandam mais de uma cordada para alcan├ºar o fim"},"urlCroqui":"---www.urlteste.climb.com","imagem":{"id":7,"legenda":"Via dos italianos","url":"https://www.escaladas.com.br/img/dinamica/via/1033/principal/1033-160419-1.png"},"tags":"#top100#fixa#classica","conquistador":{"id":1,"nome":"Andre Ilha","dataNasc":"1970-01-01T03:00:00.000+00:00","cidadeId":1},"descricao":"Via mais classica do Rio","dtConquista":null,"extensao":null},{"id":4,"nome":"Cavalo Louco","setor":{"id":1,"nome":"Face Oeste Pao de Acucar","descricao":"Face Oeste PAo de acucar, vias de 4┬║ a 8┬║ grau","cidadeId":1,"geolocalizacao":null},"graduacao":"5 Vsup E2 D2 120 metros","tipoVia":{"id":1,"nome":"Tradicional","descricao":"Vias de estilo mais cl├íssicos, demandam mais de uma cordada para alcan├ºar o fim"},"urlCroqui":"https://www.escaladasclassicas.com/escalada-cavalo-louco-pao-de-acucar-urca","imagem":{"id":8,"legenda":"Via Cavalo Louco","url":"https://www.escaladas.com.br/img/dinamica/via/1034/principal/1034-160419-1.png"},"tags":"#top100#movel","conquistador":{"id":1,"nome":"Andre Ilha","dataNasc":"1970-01-01T03:00:00.000+00:00","cidadeId":1},"descricao":"Um das mais belas escaladas do Rio de Janeiro, localizada na face oeste do P├úo de A├º├║car, tem a base compartilhada com a Italianos, mas ao inv├®s de cair ...","dtConquista":null,"extensao":null},{"id":5,"nome":"    x ","setor":{"id":1,"nome":"Face Oeste Pao de Acucar","descricao":"Face Oeste PAo de acucar, vias de 4┬║ a 8┬║ grau","cidadeId":1,"geolocalizacao":null},"graduacao":"5 Vsup E2 D2 120 metros","tipoVia":{"id":1,"nome":"Tradicional","descricao":"Vias de estilo mais cl├íssicos, demandam mais de uma cordada para alcan├ºar o fim"},"urlCroqui":"https://www.escaladasclassicas.com/escalada-cavalo-louco-pao-de-acucar-urca","imagem":{"id":1,"legenda":"Foto face oeste do pao de acucar","url":"url teste"},"tags":"#top100#movel","conquistador":{"id":1,"nome":"Andre Ilha","dataNasc":"1970-01-01T03:00:00.000+00:00","cidadeId":1},"descricao":"Um das mais belas escaladas do Rio de Janeiro, localizada na face oeste do Pão de Açúcar, tem a base compartilhada com a Italianos, mas ao invés de cair para a direita após o terceiro grampo, ela segue ligeiramente pela esquerda na direção do diedro.","dtConquista":"21/01/2022","extensao":300},{"id":7,"nome":"Buracos","setor":{"id":2,"nome":"Corcovado","descricao":"Montanha do corcovado. Vias fixas, mas maioria exige m├│vel","cidadeId":1,"geolocalizacao":null},"graduacao":"V0","tipoVia":{"id":2,"nome":"Esportiva","descricao":"Via focada em dificuldade. Lances mais atléticos em geral."},"urlCroqui":"url buracos","imagem":{"id":2,"legenda":"Foto Corcovado","url":"https://static.wixstatic.com/media/4cf148_186b75eaa64f4430a75af9e5e9bfb735.png/v1/fill/w_250,h_187,al_c,q_95,enc_auto/4cf148_186b75eaa64f4430a75af9e5e9bfb735.png"},"tags":"#boulder","conquistador":{"id":5,"nome":"Pedro Bugim","dataNasc":"1979-12-31T03:00:00.000+00:00","cidadeId":1},"descricao":"Boulder bem da hora bom para iniciantes","dtConquista":null,"extensao":4}]
    // const result = resultStub
    let params = new HttpParams()
    params = params.append('search', search);

    return this.httpClient.get<any[]>(this.endpoint, {params:params})
  }

  addFavorite(viaId: number, userId: number): Observable<any> {
    return this.httpClient.post<any>(this.endpoint + "/favoritos/" + viaId, null);
    let mocked = true
    return of(mocked)
  }

  getViasFavoritasByUsuario() {
    const url = this.endpoint + "/favoritos"
    // let params = new HttpParams()
    const usuarioId = 1;
    // params = params.append('usuario', usuarioId);
    return this.httpClient.get<any[]>(url + "?usuario=" + usuarioId)
  }

  removeFavorite(viaId: number, userId: number): Observable<any> {
    return this.httpClient.delete<any>(this.endpoint + "/favoritos/" + viaId);
    let mocked = true
    return of(mocked)
  }

  setViaFavorita() {
    this.vias.forEach((via)=>{
      via.isFavorita = this.viasFavoritasIdList.includes(via.id) ? true : false;
    })
  }
}
