import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { catchError, map, Observable, retry, subscribeOn, throwError } from 'rxjs';
import { Job } from 'workzone';
import { User } from 'workzone';
import { Company } from 'workzone';
import { error } from 'jquery';
const JOB_API_URL = 'http://localhost:6868/job';
const COMPANY_API_URL = 'http://localhost:6868/company';
const USER_API_URL = 'http://localhost:6868/user';

@Injectable({
  providedIn: 'root'
})
export class WorkZoneService {
constructor(private _http:HttpClient) { }


 // thông tin hồ sơ xin việc
 getUser(userID: string): Observable<User> {
  const url = `http://localhost:6868/job-application/${userID}`;
  return this._http.get<User>(url).pipe(
    map(result => result),
    catchError(error => {
      console.error('Error', error);
      return throwError(() => new Error('An error occurred while retrieving job application'));
    })

  );
}
 // thông tin mô tả công việc
  getjobDescription(jobJD: string): Observable<any> {
    const url = `http://localhost:6868/job-decription/${jobJD}`;
    return this._http.get<any>(url).pipe(
      map(result => result),
      catchError(error => {
        console.error('Error', error);
        return throwError(error)})

    );
}
//put thông tin hồ sơ xin việc

putInforCv(aUser:any): Observable<any>{
  const url = `http://localhost:6868/job-application/${aUser.userID}`;
  return this._http.post<any>(url,JSON.stringify(aUser)).pipe(
    map(result => result),
    catchError(error => {
      console.error('Error', error);
      return throwError(() => new Error('An error occurred while retrieving job application'));
    })

  );
}
}
