import { Component, TemplateRef, ViewChild , Input,OnInit   } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { WorkZoneService } from '../work-zone.service';
import { Job } from 'workzone';
import { ActivatedRoute, Params } from '@angular/router';

interface SubmitCV {
  fileCV?: File;
  name?: string;
  email?: string;
  sdt?: string;
  recommendation?: string
} 

@Component({
  selector: 'app-apply-cv',
  templateUrl: './apply-cv.component.html',
  styleUrls: ['./apply-cv.component.css']
})
export class ApplyCVComponent   {
  show=false;
  errMessage:string='';
  @Input() appliedData: any
  jobName: string='';
  job_id:string = '';
  isSubmitted = false;
  toggle(){
    this.show=!this.show
  }
  constructor(public bsModalRef: BsModalRef, private _job: WorkZoneService, private route: ActivatedRoute,) {}
  userLoggedinData: any

  ngOnInit() {

    this.userLoggedinData = this._job.UserDataLoggedin()
    this.appliedData.submitCV = this.submitCV

  }


  saved_jobs: string[] = []; // Specify the type of saved_jobs as an array of strings instead of an array of any
  jobs: any;

  cvSuccess() {
    this.isSubmitted = true;
    this.createAppliedJob(this.appliedData)


  }
  submitCV: SubmitCV ={}
  
  createAppliedJob(appliedJob: any) { 
    this._job.createAppliedJob(appliedJob).subscribe(result => {
      console.log(result);
    });
  }
  navigateToAppliedJob(){
    this._job.navigateToAppliedJob()
  }
  close(){
    this.show=false
  }

  
  


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
