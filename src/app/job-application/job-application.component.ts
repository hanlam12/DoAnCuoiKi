import { Component } from '@angular/core';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }
}
