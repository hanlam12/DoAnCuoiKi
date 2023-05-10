import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Contact } from 'src/assets/contact';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  showOtpModal = false;
  bsModalRef!: BsModalRef;
  empID:string=''
  model = new Contact();
  constructor(private modalService: BsModalService, bsModalRef: BsModalRef, private router:Router) {
    this.bsModalRef = bsModalRef; const empID = localStorage.getItem('empID');
    if (empID) {
      this.empID = empID;
    }
  }
  ngOnInit(): void {
  }
  sendOtp(template3: TemplateRef<any>): void {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(template3);
  }

  openModal1(template1: TemplateRef<any>) {
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(template1);
  }

  openModal2(template2: TemplateRef<any>){
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(template2)
  }
oke(){
  this.bsModalRef.hide();
  this.router.navigate(['/homepageEmployer/'+this.empID])
}
}
