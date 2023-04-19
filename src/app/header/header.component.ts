import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router){}
  openTimViec(){
    this.router.navigate(['search-job'])
  }
}
