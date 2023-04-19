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
  job3: any;
  job6: any;
  job8: any;
  jobs: any;
  modalRef!: BsModalRef;

  constructor(public _service: WorkZoneService, private router: Router, private modalService: BsModalService) {
    this.getJobs();
  }

  getJobs() {
    this._service.getJobs().subscribe({
      next: (data) => {
        this.jobs = data;
        this.job6 = data.slice(0, 6);
        this.job3 = data.slice(90, 93);
        this.job8 = data.slice(12, 20);
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

  showModal() {
    this.modalRef = this.modalService.show(ApplyCVComponent);
  }
}
