import { Component, OnInit } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { ActivatedRoute } from '@angular/router';
import {  User, Users } from 'workzone';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }
  hoSoDaTao = true
  taiCv = true
  showCv = false
  UpdateCv = false
  detail = false


  toggle(){
    this.hoSoDaTao = false,
    this.taiCv = false;
    this.showCv = true;

  }

cancel(){
  this.taiCv = true;
  this.UpdateCv=false;
  this.showCv = false;
  this.hoSoDaTao = true;
  this.detail = false;
}
chitiet(){
  this.taiCv = false;
  this.UpdateCv=false;
  this.showCv = false;
  this.hoSoDaTao = false;
  this.detail = true;
}

user: Users | undefined


constructor(
  private route: ActivatedRoute,
  private usersService: WorkZoneService
) { }

ngOnInit(): void {
  const userID = this.route.snapshot.paramMap.get('userID');
  if (userID) {
    this.usersService.getUser(userID).subscribe(user => {
      this.user = user;
      console.log('user:', user);
    });
  }
}
applied_cv: any[] = [];
public cvCount: number = 0
userID: string = '';
cv: any;


applyCV() {
    this.taiCv = false;
    this.UpdateCv=true;
    this.showCv = false;
    this.hoSoDaTao = false
    this.usersService.applyCV(this.userID, this.cv).subscribe(
      response => {
        this.applied_cv.push(response.cv);
        console.log(`Applied CV successfully: ${response.cv}`);
        const num_elements = this.applied_cv.length; // sử dụng hàm len() để đếm số phần tử
        console.log(`Number of elements in applied_cv: ${num_elements}`);
      },
      error => {
        console.log(`Error applying CV: ${error}`);
      }
    );
  }

}



// putInforCv(){
//   this.usersService.putInforCv(this.newcv).subscribe({
//     next:(data)=>{this.user=data},
//   })
//   this.taiCv = true;
//   this.UpdateCv=false;
//   this.showCv = false;
//   this.hoSoDaTao = true
// }


