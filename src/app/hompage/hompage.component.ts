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
}
