import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { WorkZoneService } from '../work-zone.service';
import { data } from 'jquery';
@Component({
  selector: 'app-saved-job',
  templateUrl: './saved-job.component.html',
  styleUrls: ['./saved-job.component.css']
})
export class SavedJobComponent {
  userId: string = '';
  userData: any;
  errMessage:string='';
  constructor(private _savejob: WorkZoneService, private route: ActivatedRoute,) {
    this.route.params.subscribe(
      (params: Params) => {
         this.userId = params['userID'];
      }
   );

    this._savejob.getSavedJob(this.userId).subscribe({
    next:(data)=>{this.userData=data},
    error:(err)=>{this.errMessage=err}
    })
    console.log (this.userData)
  }

}
