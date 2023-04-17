import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent { 
  constructor( private _loginService: WorkZoneService) {}
  isLeftDefault = false;
  menu() {
    this.isLeftDefault = !this.isLeftDefault;
  }
  isDisplaynone = true;

  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }

  logout(){
    this._loginService.logout()
  }
}
