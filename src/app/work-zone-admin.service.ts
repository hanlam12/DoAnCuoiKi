import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { catchError, map, Observable, retry, subscribeOn, throwError } from 'rxjs';
import { Job } from 'workzone';
import { Users } from 'workzone';
import { Company } from 'workzone';
const JOB_API_URL = 'http://localhost:6868/job';
const COMPANY_API_URL = 'http://localhost:6868/company';
const USER_API_URL = 'http://localhost:6868/user';

@Injectable({
  providedIn: 'root'
})
export class WorkZoneAdminService {

  constructor(private _http:HttpClient) { }



  getAdminData() {
    return this._http.get<any>('http://localhost:6868/api/admin').pipe(
      catchError((error) => 
      {
        console.log('Error accessing API', error);
        return throwError(error);
      })
    );
  };
postCompany(company:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.post<any>("http://localhost:6868/api/create-company",JSON.stringify(company),requestOptions).pipe(
map(res=>JSON.parse(res) as Company),
retry(3))
};

putCompany(company:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.put<any>("/api/put-company",JSON.stringify(company),requestOptions).pipe(
map(res=>JSON.parse(res) as Array<Company>),
retry(3))
};

deleteCompany(company:string):Observable<any> {

  const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
  return this._http.delete<any>(
    "/api/delete-company",
    { 
      headers: headers,
      body: JSON.stringify(company),
      responseType: "json"
    }
  ).pipe(
    map(res=>JSON.parse(res) as Array<Company>),
    retry(3)
  );
};

putUser(user:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.put<any>("/api/put-user",JSON.stringify(user),requestOptions).pipe(
map(res=>JSON.parse(res) as Array<Users>),
retry(3))
};

deleteUser(user: Users):Observable<any> {
  const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
  return this._http.delete<any>(
    "/api/delete-user",
    { 
      headers: headers,
      body: JSON.stringify(user),
      responseType: "json"
    }
  ).pipe(
    map(res=>JSON.parse(res) as Array<Users>),
    retry(3)
  );
  
};

putJob(job:any):Observable<any>
{
const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
const requestOptions:Object={
headers:headers,
responseType:"text"
}
return this._http.put<any>("/api/put-job",JSON.stringify(job),requestOptions).pipe(
map(res=>JSON.parse(res) as Array<Users>),
retry(3))
};

deleteJob(user: Users):Observable<any> {
  const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
  return this._http.delete<any>(
    "/api/delete-job",
    { 
      headers: headers,
      body: JSON.stringify(user),
      responseType: "json"
    }
  ).pipe(
    map(res=>JSON.parse(res) as Array<Job>),
    retry(3)
  );
  
};

}

