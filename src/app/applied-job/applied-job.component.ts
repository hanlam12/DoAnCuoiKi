import { Component } from '@angular/core';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent {
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }
}
