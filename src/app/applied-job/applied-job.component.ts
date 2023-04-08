import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-applied-job',
  templateUrl: './applied-job.component.html',
  styleUrls: ['./applied-job.component.css']
})
export class AppliedJobComponent {
  @ViewChild('text_status-off')
  textStatusOff!: ElementRef;
  @ViewChild('text_status-on')
  textStatusOn!: ElementRef;
  status() {
    this.textStatusOff.nativeElement.classList.toggle('display');
    this.textStatusOn.nativeElement.classList.toggle('is-display-none');
  }
}
