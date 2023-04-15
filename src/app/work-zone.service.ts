import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { catchError, map, mapTo, Observable, of, retry, subscribeOn, tap, throwError } from 'rxjs';
import { Job } from 'workzone';
import { User } from 'workzone';
import { Company } from 'workzone';
const JOB_API_URL = 'http://localhost:6868/job';
const COMPANY_API_URL = 'http://localhost:6868/company';
const USER_API_URL = 'http://localhost:6868/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WorkZoneService {
  private loginUrl = 'http://localhost:6868/login';

  constructor(private _http:HttpClient, private router: Router) { }

  // login
  

  navigateAfterLogin(): void {
    // Điều hướng đến trang mong muốn sau khi người dùng đăng nhập thành công
    
    this.router.navigate(['/']);
  }

  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.loginUrl, { email: email, password: password }).pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
      }),
      catchError(error => {
        return of({ error: error.error });
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
