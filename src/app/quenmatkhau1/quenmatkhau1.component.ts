import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quenmatkhau1',
  templateUrl: './quenmatkhau1.component.html',
  styleUrls: ['./quenmatkhau1.component.css']
})
export class Quenmatkhau1Component {
  constructor(private router: Router){}
  goBack(){
    this.router.navigate(['quenmatkhau']);
}
  openPage(){
    this.router.navigate(['quenmatkhau2'])
  }
}
