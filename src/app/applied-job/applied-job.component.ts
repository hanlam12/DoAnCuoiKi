import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, Users } from 'workzone';
import { WorkZoneService } from '../work-zone.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent {
  isOn: boolean = true;
  combinedJobs: any[] | undefined;
  
  status() {
    this.isOn = !this.isOn;
  }

    data = [
    ];

    page = 1;
    pageSize = 4;
    collectionSize = this.data.length;

    user: Users | undefined

    subscription: Subscription | undefined;
    AppliedJobData: any | undefined;


constructor(
  private route: ActivatedRoute,
  private usersService: WorkZoneService
) { }
userIDAppliedJob: any

ngOnInit(): void {
  const userID = "cus00002";
  if (userID) {
    this.usersService.getUser(userID).subscribe(user => {
      this.user = user;
      console.log('user:', user);
    });
  };
  this.route.paramMap.subscribe(params => {
    this.userIDAppliedJob = params.get('userID');
    this.getAppliedJob();
  });
};
getAppliedJob(): void {
  this.usersService.getAppliedJob(this.userIDAppliedJob)
    .subscribe(data => {
      this.AppliedJobData = data;
      this.AppliedJob = data.AppliedJob;
      this.userAppliedJob = data.userAppliedJob;
      this.combinedJobs = this.AppliedJob.map(job => {
        const matchingUserJob = this.userAppliedJob.find(userJob => userJob.jobJD === job.jobJD);
        return { ...job, appliedDate: matchingUserJob.appliedDate, status: matchingUserJob.status };
      });

    }, error => {
      console.error(error);
    });
};
AppliedJob: any[] = []
userAppliedJob: any[] = []





}
