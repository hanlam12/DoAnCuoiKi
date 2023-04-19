import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApplyCVComponent } from '../apply-cv/apply-cv.component';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent {
  show = false;
   errMessage:string='';
  job3: any;
  job6: any;
  job8: any;
  jobs: any;
  errMessage = '';
  modalRef!: BsModalRef;

  constructor(public _service: WorkZoneService, private router:Router){
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
  searchjob(){
    this.router.navigate(['search-job'])

  constructor(private modalService: BsModalService, public workZoneService: WorkZoneService) {}



  toggle() {
    this.getJobs();
  }


  showModal() {
    this.modalRef = this.modalService.show(ApplyCVComponent);
  }

}
