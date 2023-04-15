import { Component } from '@angular/core';
import { Job } from 'workzone';
import { IJob } from 'workzone';
import { WorkZoneService } from '../work-zone.service';
@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent {
  jobs:any
  errMessage:string=''
  showText = true;
  showText1 = true;
  showText2 = true;
  showText3 = true;
  showText4 = true;

  constructor(private _service:WorkZoneService){
    this._service.getJobs().subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  toggleText() {
    this.showText = !this.showText;
  }
  toggleText1() {
    this.showText1 = !this.showText1;
  }
  toggleText2() {
    this.showText2 = !this.showText2;
  }
  toggleText3() {
    this.showText3 = !this.showText3;
  }
  toggleText4() {
    this.showText4 = !this.showText4;
  }


}
