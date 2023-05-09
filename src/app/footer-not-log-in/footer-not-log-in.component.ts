import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer-not-log-in',
  templateUrl: './footer-not-log-in.component.html',
  styleUrls: ['./footer-not-log-in.component.css']
})
export class FooterNotLogInComponent {

  constructor(private router: Router){

  }
  thongtin(){
    this.router.navigate(['thongtin'])
  }
  dieukhoan(){
    this.router.navigate(['dieukhoandichvu'])
  }
  lienhe(){
    this.router.navigate(['contact'])
  }
  hotro(){
    this.router.navigate(['support'])
  }
}
