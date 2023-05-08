import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { Company } from 'workzone';
import { WorkZoneService } from './work-zone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoAnCuoiKi';
  currentRoute: string='';
  companyId: string='';
  email: string='';


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _S:WorkZoneService) {
    this.currentRoute = this.router.url;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentRoute = val.url;
      }
    });
    const companyID = localStorage.getItem('empID');
    if (companyID) {
      this.companyId = companyID;
    }

  }

}
