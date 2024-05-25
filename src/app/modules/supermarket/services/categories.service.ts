import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from '../interfaces/response';
import { enumCategory } from '../enums/endpoints';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });
    return this.http.get<Response>(this.apiUrl + enumCategory.categories, {headers: headers})
  }

  getCategoryById() {
    return
  }

  postCategory(name: string): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });    
    return this.http.post<Response>(this.apiUrl + enumCategory.new_category, name, {headers: headers})
  }

  putCategory() {
    return
  }

  deleteCategory(id: number): Observable<Response> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.apiKey
    });
    return this.http.delete<Response>(this.apiUrl + enumCategory.category + id, {headers: headers})
  }
}
