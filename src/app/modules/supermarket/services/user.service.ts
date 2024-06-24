import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8000/api/v1/users'; // Thay đổi từ https thành http

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password },{withCredentials:true})
      .pipe(
        catchError(this.handleError)
      );
  }
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`,{withCredentials:true})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Xử lý lỗi, có thể thay đổi để phù hợp hơn
    return throwError('Login failed, please try again later.');
  }
}
