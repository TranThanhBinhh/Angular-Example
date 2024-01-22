import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getProducts() {
    return
  }

  getProductById() {
    return
  }

  postProduct() {
    return
  }

  putProduct() {
    return
  }

  deleteProduct() {
    return
  }
  
}
