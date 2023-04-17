import { Component } from '@angular/core';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {
  isOn: boolean = true;
  showCv = false

  toggle(){
    this.showCv = !this.showCv
  }
  status() {
    this.isOn = !this.isOn;
  }
}
