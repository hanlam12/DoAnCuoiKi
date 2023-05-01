import { ActivatedRoute, Params } from '@angular/router';
import { Job } from 'workzone';
import { WorkZoneService } from '../work-zone.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService  } from 'ngx-bootstrap/modal';
import { ApplyCVComponent } from '../apply-cv/apply-cv.component';


@Component({
  selector: 'app-job-decription',
  templateUrl: './job-decription.component.html',
  styleUrls: ['./job-decription.component.css'],
})
export class JobDecriptionComponent {

  jobId: string = '';
  jobData: any;
  errMessage:string='';
  constructor(
    private route: ActivatedRoute,
    private jobsService: WorkZoneService,
    private modalService: BsModalService
  ) {
    this.route.params.subscribe(
      (params: Params) => {
         this.jobId = params['jobJD'];
      }
   );

    this.jobsService.getjobDescription(this.jobId).subscribe({
    next:(data)=>{this.jobData=data},
    error:(err)=>{this.errMessage=err}
    })
   }


  showModal() {
    this.modalService.show(ApplyCVComponent);
  }

}
