import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApplyCVComponent } from '../apply-cv/apply-cv.component';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent {
  show = false;

  saved_jobs: any[] = [];

  errMessage = '';
  selectedJob: string = '';
  job3: any;
  job6: any;
   jobs: any;
   company:any;
  modalRef!: BsModalRef;
  constructor(public _service: WorkZoneService, private router: Router, private modalService: BsModalService) {
    this.getJobs();
    this.getCompanies();
  }
  getJobs() {
    this._service.getJobs().subscribe({
      next: (data) => {
        this.jobs = data;
        this.job6 = data.slice(0, 6);
        this.job3 = data.slice(90, 93);

      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
  getCompanies(){
    this._service.getCompanies().subscribe({
      next: (data) => {
      this.company =data.slice(71,79)
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
  searchJob() {
    this.router.navigate(['search-job']);
  }

  toggle() {
    this.getJobs();
  }
  ngOnInit(): void {
    this._service.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  showModal(jobTitle: string) {
    this.selectedJob = jobTitle;
    this.modalRef = this.modalService.show(ApplyCVComponent);
  }
  luu() {
    this.show = !this.show;
  }

  isSavedValue: boolean = false;

  isSaved(job: any): boolean {
    const userId = localStorage.getItem('userID');
    if (userId) {
      this.isSavedValue = this.saved_jobs.includes(job.jobJD);
      return this.isSavedValue;
    }
    return false;
  }
saveJob(job: any): void {
  const userId = localStorage.getItem('userID');
  if (userId) {
    this._service.GetSavedJobs(userId).subscribe((savedJobs: any) => {
      if (Array.isArray(savedJobs) && savedJobs.includes(job.jobJD)) {
        console.log(`Công việc ${job.jobJD} đã được lưu trước đó`);
      } else {
        this._service.SaveJob(userId, job.jobJD, true).subscribe(() => {
          this.saved_jobs.push(job.jobJD);
          console.log(`Đã lưu công việc ${job.jobJD}`);
        });
      }
    });
  }
}



removeJob(job: any): void {
  const userId = localStorage.getItem('userID');
  if (userId) {
    this._service.removeJob(userId, job.jobJD).subscribe(() => {
      const index = this.saved_jobs.findIndex((savedJob) => savedJob === job.jobJD);
      if (index > -1) {
        this.saved_jobs.splice(index, 1);
      }
    }, error => {
      console.log(`Xóa công việc ${job.jobJD} thất bại: ${error.message}`);
    });
  }
}

  getLocation(){
    const locationElement = document.querySelector('#location') as HTMLSelectElement;
  const selectedLocation = locationElement?.value;
  if (selectedLocation === 'hanoi') {
    this._service.getHN(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'hcm'){
    this._service.getHCM(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'binhduong'){
    this._service.getBD(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'haiphong'){
    this._service.getHP(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'quangninh'){
    this._service.getQN(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'dongnai'){
    this._service.getDN(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'longan'){
    this._service.getLA(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'vungtau'){
    this._service.getVT(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'cantho'){
    this._service.getCT(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'danang'){
    this._service.getDNA(this.job6).subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }
  else if (selectedLocation === 'all'){
    this._service.getJobs().subscribe({
      next:(data)=>{this.job6=data},
      error:(err)=>{this.errMessage=err}
    });
  }

  }


}
