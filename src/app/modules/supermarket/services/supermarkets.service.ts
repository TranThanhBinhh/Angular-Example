import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Response } from '../interfaces/response';
import { enumSupermarket } from '../enums/endpoints';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SupermarketsService {

  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getSupermarkets(): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });
    return this.http.get<Response>(this.apiUrl + enumSupermarket.supermarkets, {headers: headers})
  }

  getSupermarketById() {
    return
  }

  postSupermarket(name: string): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });    
    return this.http.post<Response>(this.apiUrl + enumSupermarket.new_supermarket, name, {headers: headers})
  }

  putSupermarket() {
    return
  }

  deleteSupermarket(id: number): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });
    return this.http.delete<Response>(this.apiUrl + enumSupermarket.supermarket + id, {headers: headers})
  }

}
