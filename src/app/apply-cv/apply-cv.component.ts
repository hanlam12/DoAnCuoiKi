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

  cvSuccess() {
    this.isSubmitted = true;
  }

}
