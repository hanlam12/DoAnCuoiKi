import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quenmatkhau2',
  templateUrl: './quenmatkhau2.component.html',
  styleUrls: ['./quenmatkhau2.component.css']
})
export class Quenmatkhau2Component {
  constructor(private router:Router){}
  openPage(){
    this.router.navigate(['quenmatkhau3'])
  }
  goBack(){
    this.router.navigate(['quenmatkhau1'])
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
