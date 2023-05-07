import { Component, TemplateRef, ViewChild , Input,OnInit   } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { WorkZoneService } from '../work-zone.service';
import { Job } from 'workzone';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-apply-cv',
  templateUrl: './apply-cv.component.html',
  styleUrls: ['./apply-cv.component.css']
})
export class ApplyCVComponent   {
  show=false;
  errMessage:string='';
  @Input() jobJD: string='';
  @Input() selectedJob: string = '';
  jobName: string='';
  job_id:string = '';
  isSubmitted = false;
  toggle(){
    this.show=!this.show
  }
  constructor(public bsModalRef: BsModalRef, private _job: WorkZoneService, private route: ActivatedRoute,) {}
  ngOnInit() {
    console.log(this.selectedJob);
  }

  saved_jobs: string[] = []; // Specify the type of saved_jobs as an array of strings instead of an array of any
  jobs: any;

  ApplyJob(job: any): void {
    const userId = localStorage.getItem('userID');
    if (userId) {
      this.isSubmitted = true;
      this._job.getUserApply(userId).subscribe((applied: any) => { // Specify the type of the applied parameter as an array of strings
        if (Array.isArray(applied) && applied.includes(job.jobJD)) {
          console.log(`Công việc ${job.jobJD} đã được apply trước đó`);
        } else {
          this._job.ApplyJob(userId, job.jobJD, true).subscribe(() => {
            this.saved_jobs.push(job.jobJD);
            console.log(`Đã apply công việc ${job.jobJD}`);
          });
        }
      });
    }
  }
}
