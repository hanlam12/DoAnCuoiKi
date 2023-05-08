import { Component,Input   } from '@angular/core';
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
  @Input() jobCount: number = 0;
  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }
  constructor(private _jobcount: WorkZoneService) {
    const uID = localStorage.getItem('userID');
    if (uID) {
      this.uID = uID;
    }
    this._jobcount.jobCountChanged.subscribe((count: number) => {
      this.jobCount = count;
    });
  }
}
