import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { enumSupermarket } from '../enums/endpoints';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';

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

  postSupermarket() {
    return
  }

  putSupermarket() {
    return
  }

  deleteSupermarket() {
    return
  }

}
