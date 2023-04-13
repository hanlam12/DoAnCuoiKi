import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLeftDefault = false;
  menu() {
    this.isLeftDefault = !this.isLeftDefault;
  }
}
