import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.css']
})
export class AccountMenuComponent {
  isDisplaynone = true;
  uID: string =''
  jobs: any
  savedJobCount: number;
  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }
  constructor(private _jobcount: WorkZoneService) {
    const uID = localStorage.getItem('userID');
    if (uID) {
      this.uID = uID;
    }
    this.savedJobCount = _jobcount.getSavedJobCount();
  }
}
