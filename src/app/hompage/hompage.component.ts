import { Component } from '@angular/core';
import { BsModalRef, BsModalService  } from 'ngx-bootstrap/modal';
import { ApplyCVComponent } from '../apply-cv/apply-cv.component';
@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent {
  show = false;
  constructor(private modalService: BsModalService) {}


  modalRef!: BsModalRef;

  showModal() {

    this.modalRef = this.modalService.show(ApplyCVComponent);
  }
}
