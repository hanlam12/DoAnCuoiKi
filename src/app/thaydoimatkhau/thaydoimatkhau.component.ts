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
  errMessage :string='';
  existingUserErrors:string[] = [];




  password: string = '';
  passwordType: string = 'password';
  togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }


  constructor(private apiService: WorkZoneService) {
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }


 changePassword() {
  if (this.newPassword !== this.confirmPassword) {
    console.log('New password and confirm password do not match');
    this.errMessage="New password and confirm password do not match"
    return;
  }


  this.apiService.changePassword(this.oldPassword, this.newPassword)
  .subscribe(
    data => {
      if (data.message === 'Unauthorized') {
        this.errMessage = "Unauthorized";
      } else if (data.message === 'User not found') {
        this.errMessage = "User not found";
      }
      else if (data.message === 'Invalid password') {
        this.errMessage = "Invalid password";
      }
      else if (data.message === 'Failed to update user password') {
        this.errMessage = "Failed to update user password";
      }
      else if (data.message === 'Internal server error') {
        this.errMessage = "Internal server error";
      }
       else {
        this.errMessage = "Password updated successfully";
        alert("Password updated successfully")
      location.reload()

      }
    }
  );
  }
}
