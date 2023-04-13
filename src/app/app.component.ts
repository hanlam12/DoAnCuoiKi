import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoAnCuoiKi';
  currentRoute: string='';

  constructor(private router: Router) {
    this.currentRoute = this.router.url; // Set default value for currentRoute
  this.router.events.subscribe((val) => {
    if (val instanceof NavigationEnd) {
      this.currentRoute = val.url;
    }
  });

}}
