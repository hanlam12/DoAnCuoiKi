import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { catchError, map, Observable, retry, subscribeOn, throwError } from 'rxjs';
import { Job } from 'workzone';
import { User } from 'workzone';
import { Company } from 'workzone';
const JOB_API_URL = 'http://localhost:6868/job';
const COMPANY_API_URL = 'http://localhost:6868/company';
const USER_API_URL = 'http://localhost:6868/user';

@Injectable({
  providedIn: 'root'
})
export class WorkZoneService {

  constructor(private _http:HttpClient) { }

  //thông tin người tìm việc
  private serverUrl = 'http://localhost:6868';
  getUser(userID: string): Observable<User> {
    const url = `${this.serverUrl}/users/${userID}`;
    return this._http.get<User>(url);
  }
}
