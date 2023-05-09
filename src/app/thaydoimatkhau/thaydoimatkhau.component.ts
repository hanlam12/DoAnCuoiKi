import { Component, OnInit } from '@angular/core';
import { Password } from 'src/assets/thaymatkhau';
import { WorkZoneService } from '../work-zone.service';

import { Router } from '@angular/router';

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
  uID:string=''



  password: string = '';
  passwordType: string = 'password';
  togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }


  constructor(private apiService: WorkZoneService,private router:Router) {
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    const uID = localStorage.getItem('userID');
    if (uID) {
      this.uID = uID;
    }
  }

profile(){
  this.router.navigate(['profile', this.uID])
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


      }
    }
  );
  }
}
