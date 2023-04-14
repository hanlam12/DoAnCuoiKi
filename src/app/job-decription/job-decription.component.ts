import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService  } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-job-decription',
  templateUrl: './job-decription.component.html',
  styleUrls: ['./job-decription.component.css'],
})
export class JobDecriptionComponent{
  @ViewChild('myModal') modal!: TemplateRef<any>;
  modalRef!: BsModalRef;
  @ViewChild('myModal2') modal2!: TemplateRef<any>
  modal2Ref!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(this.modal);
  }
  cvSuccess(){
    this.modal2Ref = this.modalService.show(this.modal2);
    this.modalRef.hide();
  }
}
