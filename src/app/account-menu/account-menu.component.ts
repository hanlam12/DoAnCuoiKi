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
  jobCount: number = 0;
  jobCount_app: number = 0;
  jobCount_cv: number = 0;

  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }
  constructor(private _jobcount: WorkZoneService) {
    const uID = localStorage.getItem('userID');
    if (uID) {
      this.uID = uID;
    }
    this._jobcount.jobCountSavedChanged.subscribe((counts: number) => {
      this.jobCount = counts;
    });
    this._jobcount.jobCountAppliedChanged.subscribe((counts: number) => {
      this.jobCount_app = counts;
    });
    this._jobcount.jobCvChanged.subscribe((counts: number) => {
      this.jobCount_cv = counts;
    });
  }
}
