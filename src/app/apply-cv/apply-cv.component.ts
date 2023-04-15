import { Component, TemplateRef, ViewChild , Input  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-apply-cv',
  templateUrl: './apply-cv.component.html',
  styleUrls: ['./apply-cv.component.css']
})
export class ApplyCVComponent   {
  show=false
  tonggle(){
    this.show=!this.show
  }

  @ViewChild('myModal') modal!: TemplateRef<any>;
  modalRef!: BsModalRef;
  @ViewChild('myModal2') modal2!: TemplateRef<any>;
  modal2Ref!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(){
    this.modalRef = this.modalService.show(this.modal)
  }
  cvSuccess() {
    this.modal2Ref = this.modalService.show(this.modal2);
    this.modalRef.hide()
  }
  cvSuccess2() {
    this.modal2Ref.hide()
  }
}
