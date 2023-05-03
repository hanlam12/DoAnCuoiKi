import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-employer',
  templateUrl: './header-employer.component.html',
  styleUrls: ['./header-employer.component.css']
})
export class HeaderEmployerComponent {
  public person_name: string='';
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
    this.login.getEmpName().subscribe(data => {
      this.person_name = data;

    });
  }
  get loggedIn(): boolean {
    return this.login.isLoggedInEmp();
  }
  logout(){
  return this.login.logoutEmp()
}
}
