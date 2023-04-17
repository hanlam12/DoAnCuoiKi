import { EventEmitter, Injectable } from '@angular/core';
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

  // login

  private loginUrl = 'http://localhost:6868/login';
  public userEmail = localStorage.getItem('userEmail'); // đây là userEmail khi đăng nhập thành công, đứa nào muốn lấy truy xuất khi login thành công thì lấy thằng này.
  userIdUpdated = new EventEmitter<string>();

  constructor(private _http:HttpClient, private router: Router) { }
  navigateAfterLogin(): void {
    // Điều hướng đến trang mong muốn sau khi người dùng đăng nhập thành công
    
    this.router.navigate(['/']);
  }

  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.loginUrl, { email: email, password: password }).pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', data.userEmail);
        this.userIdUpdated.emit(data.userEmail);
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
  // end login

  //thông tin công ty
  private serverUrl = 'http://localhost:6868';
  getCompany(id: string): Observable<Company> {
    const url = `${this.serverUrl}/congty/${id}`;
    return this._http.get<Company>(url);
  }

}
