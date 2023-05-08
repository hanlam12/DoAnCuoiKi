import { Component, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { WorkZoneService } from '../work-zone.service';

@Component({
  selector: 'app-saved-job',
  templateUrl: './saved-job.component.html',
  styleUrls: ['./saved-job.component.css']
})
export class SavedJobComponent {
  userId: string = '';
  userData: any;
  errMessage:string='';
 jobCount = 0

  constructor(private _savejob: WorkZoneService, private route: ActivatedRoute, private router:Router) {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = params['userID'];
        this.getSavedJobs();
      }
    );
  }
  saved_jobs: any[] = [];
  getSavedJobs() {
    this._savejob.getSavedJob(this.userId).subscribe({
      next: (data) => {
        this.userData = data;
        this.jobCount = this.userData?.job.length;
        this._savejob.updateJobCount(this.jobCount);

      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  removeJob(job: any): void {
    const userId = localStorage.getItem('userID');
    if (userId) {
      this._savejob.removeJob(userId, job.jobJD).subscribe(() => {
        const index = this.saved_jobs.findIndex((savedJob) => savedJob === job.jobJD);
        if (index > -1) {
          this.saved_jobs.splice(index, 1);
        }
        console.log(`Đã xóa job`);
        location.reload()
        // this.router.navigate(['/saved/'+ userId]); // move here

      }, error => {
        console.log(`Xóa công việc ${job.jobJD} thất bại: ${error.message}`);
      });
    }
  }

}
