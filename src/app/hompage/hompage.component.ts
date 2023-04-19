import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApplyCVComponent } from '../apply-cv/apply-cv.component';
import { WorkZoneService } from '../work-zone.service';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent {
  show = false;
  job3: any;
  job6: any;
  job8: any;
  jobs: any;
  errMessage = '';
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService, public workZoneService: WorkZoneService) {}

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.workZoneService.getJobs().subscribe(
      (data) => {
        this.jobs = data;
        this.job6 = data.slice(0, 6);
        this.job3 = data.slice(90, 93);
        this.job8 = data.slice(12, 20);
      },
      (error) => {
        this.errMessage = error.message;
      }
    );
  }

  toggle() {
    this.getJobs();
  }

  showModal() {
    this.modalRef = this.modalService.show(ApplyCVComponent);
  }
}
