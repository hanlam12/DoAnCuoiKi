import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent {

  job3:any;
  job6:any;
  job8:any;
  jobs:any;
  errMessage:string=''
  constructor(public _service: WorkZoneService){
    this._service.getJobs().subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
    })
    this._service.getJobs().subscribe({
      next:(data)=>{this.job6=data.slice(0,6)},
      error:(err)=>{this.errMessage=err}
    })
    this._service.getJobs().subscribe({
      next:(data)=>{this.job3=data.slice(90,93)},
      error:(err)=>{this.errMessage=err}
    })
    this._service.getJobs().subscribe({
      next:(data)=>{this.job8=data.slice(12,20)},
      error:(err)=>{this.errMessage=err}
    })
  }
  tonggle(){
    this._service.getJobs().subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
    })
  }


}
