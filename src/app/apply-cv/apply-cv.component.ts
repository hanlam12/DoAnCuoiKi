import { Component, TemplateRef, ViewChild , Input  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-apply-cv',
  templateUrl: './apply-cv.component.html',
  styleUrls: ['./apply-cv.component.css']
})
export class ApplyCVComponent   {
  show=false;
  isSubmitted = false;
  toggle(){
    this.show=!this.show
  }


  constructor(public bsModalRef: BsModalRef) {}

  cvSuccess() {
    this.isSubmitted = true;

  }

}
