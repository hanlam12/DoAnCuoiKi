import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private jobsService: WorkZoneService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('jobId')) {
        this.jobId = params.get('jobId')!;
        this.getJobDescription();
      }
    });
  }

  getJobDescription() {
    this.jobsService.getjobDescription(this.jobId).subscribe({
      next: result => {
        this.jobData = result;
        console.log(this.jobData);
      },
      error: error => {
        console.error('Error getting job data:', error);
      }
    });
  }

  showModal() {
    this.modalService.show(ApplyCVComponent);
  }

}
