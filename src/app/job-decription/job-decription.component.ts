import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'workzone';
import { WorkZoneService } from '../work-zone.service';
@Component({
  selector: 'app-job-decription',
  templateUrl: './job-decription.component.html',
  styleUrls: ['./job-decription.component.css'],
})
export class JobDecriptionComponent{

//  job: Job | undefined
jobJD:string=''
jobData: any
constructor(
  private route: ActivatedRoute,
  private jobsService: WorkZoneService
) { }
ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.jobJD = params.get('jobJD')!;
    this.getjobDescription();
  });
}

getjobDescription() {
  this.jobsService.getjobDescription(this.jobJD).subscribe({
    next: result => {
      this.jobData = result;
      console.log(this.jobData);
    },
    error: error => {
      console.error('Error getting company data:', error);
    }
  });
}
}
