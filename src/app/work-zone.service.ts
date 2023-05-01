import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from'@angular/common/http';
import { catchError, map, Observable, of, retry, subscribeOn, tap, throwError } from 'rxjs';
import { Job, Users  } from 'workzone';

import { Company } from 'workzone';
import { error } from 'jquery';
import { Router } from '@angular/router';

const JOB_API_URL = 'http://localhost:6868/api/job';
const COMPANY_API_URL = 'http://localhost:6868/api/company';
const USER_API_URL = 'http://localhost:6868/api/user';

@Injectable({
  providedIn: 'root'
})
export class WorkZoneService {

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
    }
constructor(private _http:HttpClient, private router: Router) { }

  public loggedIn = false;
  public serverUrl = 'http://localhost:6868';
  private _url:string="/entries"


    // login
  private loginUrl = 'http://localhost:6868/api/login';
  public userEmail = localStorage.getItem('userEmail'); // đây là userEmail khi đăng nhập thành công, đứa nào muốn lấy truy xuất khi login thành công thì lấy thằng này.
  userIdUpdated = new EventEmitter<string>();

  navigateAfterLogin(): void {
    // Điều hướng đến trang mong muốn sau khi người dùng đăng nhập thành công
    this.router.navigate(['/']);
  }


  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.loginUrl, { email: email, password: password }).pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', data.userEmail);

        localStorage.setItem('userID', data.userID);

        localStorage.setItem('loggedIn', 'true')
        this.loggedIn = true; // set loggedIn thành true sau khi đăng nhập thành công
        this.userIdUpdated.emit(data.userEmail);
      }),
      catchError(error => {
        return of({ error: error.error });
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn) {
    this.loggedIn = (isLoggedIn === 'true');
  }
    return !!token && this.loggedIn; // trả về true nếu đã đăng nhập và loggedIn = true
  }

  // end login
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.setItem('loggedIn', 'false')
    }


 // thông tin hồ sơ xin việc
 getUser(userID: string): Observable<Users> {
  const url = `http://localhost:6868/api/job-application/${userID}`;
  return this._http.get<Users>(url).pipe(
    map(result => result),
    catchError(error => {
      console.error('Error', error);
      return throwError(() => new Error('An error occurred while retrieving job application'));
    }))};




 getGD(fGD:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }


    return this._http.get<any>("/api/job/category/Gi%C3%A1o%20d%E1%BB%A5c%20%2F%20%C4%90%C3%A0o%20t%E1%BA%A1o",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Job>),
      retry(3),
      catchError(this.handleError))
  }


  getTC(fGD:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }


    return this._http.get<any>("/api/job/category/T%C3%A0i%20ch%C3%ADnh%20%2F%20%C4%90%E1%BA%A7u%20t%C6%B0",requestOptions).pipe(


      map(res=>JSON.parse(res) as Array<Job>),
      retry(3),
      catchError(this.handleError))
  }

  getNH(fNH:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>("/api/job/category/Ng%C3%A2n%20h%C3%A0ng",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Job>),
      retry(3),
      catchError(this.handleError))
  }

  getCNTT(fCNTT:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>("/api/job/category/C%C3%B4ng%20ngh%E1%BB%87%20th%C3%B4ng%20tin",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Job>),
      retry(3),
      catchError(this.handleError))
  }

  getTT(fTT:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>("/api/job/category/Th%E1%BB%9Di%20trang",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Job>),
      retry(3),
      catchError(this.handleError))
  }

  getIT(fIT:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>("/api/job/category/CNTT%20-%20Ph%E1%BA%A7n%20m%E1%BB%81m",requestOptions).pipe(


      map(res=>JSON.parse(res) as Array<Job>),
      retry(3),
      catchError(this.handleError))
  }


//lấy tên người dùng
getUserName() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this._http.get<any>(`${this.serverUrl}/api/user`, { headers });
}

//lấy job của user
getSavedJob(userID: string):  Observable<Job> {
   return this._http.get<Job>(`http://localhost:6868/api/savejob/${userID}`);
}

//lưu job
SaveJob(userId: string, jobID: string, isSaved: boolean): Observable<any> {
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  const requestOptions: Object = {
  headers: headers
  };
  const body = {
  userID: userId,
  JobJD: jobID
  };
  let apiUrl = "/api/savejob";

  return this._http.put<any>(`http://localhost:6868${apiUrl}`, body, requestOptions).pipe(
  catchError(this.handleError)
  );
  }

  GetSavedJobs(userId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const requestOptions: Object = {
      headers: headers
    };
    let apiUrl = `/api/getsavejob/${userId}`;

    return this._http.get<any>(`http://localhost:6868${apiUrl}`, requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  removeJob(userID: string, JobJD: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const requestOptions: Object = {
      headers: headers
    };
    return this._http.delete<any>(`http://localhost:6868/api/removejob/${userID}/${JobJD}`, requestOptions).pipe(
      catchError(this.handleError)
    );
  }


//thông tin công ty
  getCompany(company_id: string): Observable<Company> {
    const url = `${this.serverUrl}/api/company`;
    return this._http.get<Company>(`${url}/${company_id}`);
  }
  getCompanies():Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"

    }
    return this._http.get<any>("/api/company",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Company>),
      retry(3),
      catchError(this.handleError)
    )
  }
  getJobs():Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>("/api/job",requestOptions).pipe(
    map(res=>JSON.parse(res) as Array<Job>),
    retry(3),
    catchError(this.handleError))
    }

 getTV(fTV:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }


      return this._http.get<any>("/api/job/category/T%C6%B0%20v%E1%BA%A5n",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }


      getNhanVien(fNhanVien:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }

        return this._http.get<any>("/api/job/Nh%C3%A2n%20vi%C3%AAn",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }


      getQuanLy(fQuanLy:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/Qu%E1%BA%A3n%20l%C3%BD",requestOptions).pipe(


          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getTruongNhom(fTruongNhom:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/Tr%C6%B0%E1%BB%9Fng%20nh%C3%B3m",requestOptions).pipe(

          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getQLGS(fQLGS:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/Qu%E1%BA%A3n%20l%C3%BD%20%2F%20Gi%C3%A1m%20s%C3%A1t",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getTruongPhong(fTruongPhong:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/Tr%C6%B0%E1%BB%9Fng%20ph%C3%B2ng",requestOptions).pipe(

          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getTNGS(fTNGS:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/Tr%C6%B0%E1%BB%9Fng%20nh%C3%B3m%20%2F%20Gi%C3%A1m%20s%C3%A1t",requestOptions).pipe(


          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getVuaTN(fVuaTN:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/V%E1%BB%ABa%20t%E1%BB%91t%20nghi%E1%BB%87p",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getXayDung(fXayDung:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/X%C3%A2y%20d%E1%BB%B1ng",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getKiemToan(fKT:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/K%E1%BA%BF%20to%C3%A1n%20%2F%20Ki%E1%BB%83m%20to%C3%A1n",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getQC(fQC:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/Qu%E1%BA%A3n%20l%C3%BD%20ch%E1%BA%A5t%20l%C6%B0%E1%BB%A3ng%20(QA%2FQC)",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getNHKS(fNHKS:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/Nh%C3%A0%20h%C3%A0ng%20%2F%20Kh%C3%A1ch%20s%E1%BA%A1n",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getDVKH(fDVKH:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/D%E1%BB%8Bch%20v%E1%BB%A5%20kh%C3%A1ch%20h%C3%A0ng",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getBHKD(fBHKD:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/B%C3%A1n%20h%C3%A0ng%20%2F%20Kinh%20doanh",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getOTO(fOTO:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/C%C6%A1%20kh%C3%AD%20%2F%20%C3%94%20t%C3%B4%20%2F%20T%E1%BB%B1%20%C4%91%E1%BB%99ng%20h%C3%B3a",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getDT(fDT:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/%C4%90i%E1%BB%87n%20%2F%20%C4%90i%E1%BB%87n%20t%E1%BB%AD%20%2F%20%C4%90i%E1%BB%87n%20l%E1%BA%A1nh",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getBL(fBL:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/B%C3%A1n%20l%E1%BA%BB%20%2F%20B%C3%A1n%20s%E1%BB%89",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }

      getBH(fBH:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }
        return this._http.get<any>("/api/job/category/B%E1%BA%A3o%20hi%E1%BB%83m",requestOptions).pipe(

          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }


      getMT(fMT:any):Observable<any>{
        const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
        const requestOptions:Object={
        headers:headers,
        responseType:"text"
        }

        return this._http.get<any>("/api/job/category/M%C3%B4i%20tr%C6%B0%E1%BB%9Dng",requestOptions).pipe(


          map(res=>JSON.parse(res) as Array<Job>),
          retry(3),
          catchError(this.handleError))
      }



  postUser(aUser:any):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("/api/users",JSON.stringify(aUser),requestOptions).pipe(
        map(res=>JSON.parse(res) as Users),
        retry(3),
        catchError(this.handleError)
    )
  }


   // thông tin mô tả công việc
   getjobDescription(jobJD: string): Observable<Job> {

    return this._http.get<Job>("http://localhost:6868/api/job-decription/"+jobJD)
    }
     // lấy tên công việc
     getJobById(jobJD: string): Observable<Job> {
      const url = `http://localhost:6868/api/applycv/${jobJD}`;
      return this._http.get<Job>(url);
    }
// đăng ký employer
postCompany(aCompany:any):Observable<any>
{
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  }
  return this._http.post<any>("/register",JSON.stringify(aCompany),requestOptions).pipe(
      map(res=>JSON.parse(res) as Company),
      retry(3),
      catchError(this.handleError)
  )
}
// đăng nhập employer
apiUrl = 'http://localhost:6868/employer'; // Địa chỉ API đăng nhập

  loginEmployer(email: string, password: string) {
    const body = { email, password };
    return this._http.post<any>(this.apiUrl, body);
  }

    getHN(fHN:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/H%C3%A0%20N%E1%BB%99i",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }

    getHCM(fHCM:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/H%E1%BB%93%20Ch%C3%AD%20Minh",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }

    getBD(fBD:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/B%C3%ACnh%20D%C6%B0%C6%A1ng",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }

    getHP(fHP:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/H%E1%BA%A3i%20Ph%C3%B2ng",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }
    getQN(fQN:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/Qu%E1%BA%A3ng%20Ninh",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }
    getDN(fDN:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/%C4%90%E1%BB%93ng%20Nai",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }
    getLA(fLA:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/Long%20An",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }
    getVT(fVT:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/V%C5%A9ng%20T%C3%A0u",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }
    getCT(fCT:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/C%E1%BA%A7n%20Th%C6%A1",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }
    getDNA(fDNA:any):Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
      }
      return this._http.get<any>("/job/address/%C4%90%C3%A0%20N%E1%BA%B5ng",requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<Job>),
        retry(3),
        catchError(this.handleError))
    }

//put thông tin hồ sơ xin việc

putInforCv(aUser:any): Observable<any>{
  const url = `http://localhost:6868/api/job-application/${aUser.userID}`;
  return this._http.post<any>(url,JSON.stringify(aUser)).pipe(
    map(result => result),
    catchError(error => {
      console.error('Error', error);
      return throwError(() => new Error('An error occurred while retrieving job application'));
    })

  );
}


getcompany(company_id: string): Observable<Company> {
  const url = `http://localhost:6868/api/recruitment/${company_id}`;
  return this._http.get<Company>(url).pipe(
    map(result => result),
    catchError(error => {
      console.error('Error', error);
      return throwError(error)})

  );
}

addJob(jobData: any, company_id: string):Observable<any>
{
  const url = `http://localhost:6868/api/recruitment/${company_id}/job`;
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object={
    headers:headers,
    responseType:"text"
  }
  return this._http.post<any>(url,jobData ,requestOptions).pipe(
      map(res=>JSON.parse(res) as Job),
      retry(3),
      catchError(this.handleError)
  )
}
// lấy profile
getProfile() {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this._http.get<any>(`${this.serverUrl}/userID`, { headers });
}
// chỉnh sửa city
updateProfile(user: Users) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this._http.put<any>(`${this.serverUrl}/city`, user, { headers });
}
// chỉnh sửa address
updateProfile2(user: Users) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this._http.put<any>(`${this.serverUrl}/address`, user, { headers });
}
// chỉnh sửa district
updateProfile3(user: Users) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this._http.put<any>(`${this.serverUrl}/district`, user, { headers });
}
// chỉnh sửa DOB
updateProfile4(user: Users) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this._http.put<any>(`${this.serverUrl}/DOB`, user, { headers });
}
// chỉnh sửa gender
updateProfile5(user: Users) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this._http.put<any>(`${this.serverUrl}/gender`, user, { headers });
}
// image
updateImage(image: string): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = { Authorization: 'Bearer ' + token };
  const body = { image: image };
  return this._http.put(`${this.serverUrl}/image`, body, { headers });

}
}




