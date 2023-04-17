import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService  } from 'ngx-bootstrap/modal';
import { ApplyCVComponent } from '../apply-cv/apply-cv.component';
@Component({
  selector: 'app-job-decription',
  templateUrl: './job-decription.component.html',
  styleUrls: ['./job-decription.component.css'],
})
export class JobDecriptionComponent{
  show = false;
  showApplyCV: boolean = false;
  constructor(private modalService: BsModalService) {}

  @ViewChild('myModal') myModalTemplate!: TemplateRef<any>;
  modalRef!: BsModalRef;

  showModal() {
    this.showApplyCV = true;
    this.modalRef = this.modalService.show(this.myModalTemplate);
  }
}
