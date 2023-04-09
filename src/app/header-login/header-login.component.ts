import { Component } from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent {
  isLeftDefault = false;
  menu() {
    this.isLeftDefault = !this.isLeftDefault;
  }
  isDisplaynone = true;

  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }
}
