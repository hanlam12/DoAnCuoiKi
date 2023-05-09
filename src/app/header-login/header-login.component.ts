import { Component, OnInit } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {
  uID: string =''
  public fullname: string='';
  isLeftDefault = false;
  menu() {
    this.isLeftDefault = !this.isLeftDefault;
  }

  isDisplaynone = true;
  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }

  constructor(private login: WorkZoneService, private router: Router) {
    const uID = localStorage.getItem('userID');
    if (uID) {
      this.uID = uID;
    }
   }

  ngOnInit() {
    this.login.getUserName().subscribe(data => {
      this.fullname = data;

    });
  }
  get loggedIn(): boolean {
    return this.login.isLoggedIn();
  }
  logout(){
  return this.login.logout()

}
profile(){
  this.router.navigate(['profile',this.uID]).then(() => {
   location.reload();
  });
}
job_application(){
  this.router.navigate(['job-application',this.uID]).then(() => {
    location.reload();
  });
}
saved(){
  this.router.navigate(['saved',this.uID]).then(() => {
    location.reload();
  });
}
applied_job(){
  this.router.navigate(['applied-job',this.uID]).then(() => {
    location.reload();
  });
}
}
