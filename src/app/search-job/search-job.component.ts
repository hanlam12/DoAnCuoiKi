import { Component } from '@angular/core';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent {
  jobs:any
  errMessage:string=''
  showText = true;
  showText1 = true;
  showText2 = true;
  showText3 = true;
  showText4 = true;

  toggleText() {
    this.showText = !this.showText;
  }
  toggleText1() {
    this.showText1 = !this.showText1;
  }
  toggleText2() {
    this.showText2 = !this.showText2;
  }
  toggleText3() {
    this.showText3 = !this.showText3;
  }
  toggleText4() {
    this.showText4 = !this.showText4;
  }
}
