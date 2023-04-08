import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-job-decription',
  templateUrl: './job-decription.component.html',
  styleUrls: ['./job-decription.component.css'],
})
export class JobDecriptionComponent {
  openModal() {
    $('#myModal').modal('show');
  }
}
