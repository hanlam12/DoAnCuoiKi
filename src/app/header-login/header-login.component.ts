import { Component, OnInit } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  public fullname: string='';
  isLeftDefault = false;
  menu() {
    this.isLeftDefault = !this.isLeftDefault;
  }

  isDisplaynone = true;
  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }

  constructor(private login: WorkZoneService) { }
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
}
