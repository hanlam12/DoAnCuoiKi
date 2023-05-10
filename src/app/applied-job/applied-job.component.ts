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
  jobCount_app = 0
  userIDAppliedJob: any
AppliedJob: any[] = []
userAppliedJob: any[] = []
user: Users | undefined
AppliedJobData: any | undefined;
  status() {
    this.isOn = !this.isOn;
  }

constructor(
  private route: ActivatedRoute,
  private usersService: WorkZoneService
) { }

ngOnInit(): void {
  // const userID = this.usersService.UserIDDataLoggedin();
  this.route.paramMap.subscribe(params => {
    this.userIDAppliedJob = params.get('userID');
    this.getAppliedJob();
  });

  if (this.userIDAppliedJob) {
    this.usersService.getUser(this.userIDAppliedJob).subscribe(user => {
      this.user = user;
      console.log('user:', user);
    });
  };

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
      this.jobCount_app = this.userAppliedJob?.length
      this.usersService.updateJobCountApplied(this.jobCount_app);
    }, error => {
      console.error(error);
    });
};
}
