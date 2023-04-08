import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {
  @ViewChild('text_status-off')
  textStatusOff!: ElementRef;
  @ViewChild('text_status-on')
  textStatusOn!: ElementRef;
  status() {
    this.textStatusOff.nativeElement.classList.toggle('display');
    this.textStatusOn.nativeElement.classList.toggle('is-display-none');
  }
}
