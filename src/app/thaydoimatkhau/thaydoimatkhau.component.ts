import { Component, OnInit } from '@angular/core';
import { Password } from 'src/assets/thaymatkhau';
import { WorkZoneService } from '../work-zone.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'workzone';

@Component({
  selector: 'app-thaydoimatkhau',
  templateUrl: './thaydoimatkhau.component.html',
  styleUrls: ['./thaydoimatkhau.component.css']
})
export class ThaydoimatkhauComponent  {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  errorMessage:string=''
  constructor(private apiService: WorkZoneService) {
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }

 changePassword() {
  if (this.newPassword !== this.confirmPassword) {
    console.log('New password and confirm password do not match');
    return;
  }

  this.apiService.changePassword(this.oldPassword, this.newPassword)
  .subscribe(
    (result) => {
      if (result === 'success') {
        console.log('Password updated successfully');
        // Hiển thị thông báo thành công trên giao diện
      } else {
        console.log('Failed to update password. Please try again.');
      }
    },
    (error) => {
      this.errorMessage = error;
      if (error === 'Incorrect password. Please try again.') {
        console.log('Incorrect password. Please try again.');
      } else if (error === 'User not found. Please try again.') {
        console.log('User not found. Please try again.');
      } else if (error === 'Internal server error. Please try again later.') {
        console.log('Internal server error. Please try again later.');
      } else {
        console.log('Failed to update password. Please try again.');
      }
    }
  );
  }
}

