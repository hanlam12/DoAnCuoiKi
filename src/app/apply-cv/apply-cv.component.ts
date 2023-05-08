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

  
  


  

}
