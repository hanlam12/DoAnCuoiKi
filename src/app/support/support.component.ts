import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  constructor(private router:Router){}
  openPage(){
    this.router.navigate(['contact'])
  }
}
