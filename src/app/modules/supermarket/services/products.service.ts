import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../interfaces/product';
import { enumProduct } from '../enums/endpoints';
import { Response } from '../interfaces/response';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });
    return this.http.get<Response>(this.apiUrl + enumProduct.products, {headers: headers}) 
  }

  getProductById() {
    return
  }

  postProduct(product: Product): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });    
    return this.http.post<Response>(this.apiUrl + enumProduct.product, product, {headers: headers})
  }

  putProduct() {
    return
  }

  deleteProduct(id: number): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });
    return this.http.delete<Response>(this.apiUrl + enumProduct.product + id, {headers: headers})
  }
  
}
