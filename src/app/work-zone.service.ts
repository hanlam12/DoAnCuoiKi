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


}
