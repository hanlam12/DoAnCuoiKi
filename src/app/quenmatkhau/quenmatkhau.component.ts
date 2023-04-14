import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent {
  constructor(private router: Router){}
  openPage(){
    this.router.navigate(['quenmatkhau1']);
  }
}
