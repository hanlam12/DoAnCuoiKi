import { Component, OnInit } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { ActivatedRoute } from '@angular/router';
import {   Users } from 'workzone';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  isOn: boolean = true;
  user: Users | undefined
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
selectedIndex: number = -1;

chitiet() {
  if (this.selectedIndex >= 0) {

    // Hiển thị chi tiết của phần tử tại chỉ mục selectedIndex
    this.taiCv = false;
    this.UpdateCv = false;
    this.showCv = false;
    this.hoSoDaTao = false;
    this.detail = true;

  }
}


constructor(
  private route: ActivatedRoute,
  private usersService: WorkZoneService
) { }

ngOnInit(): void {
  const userID = this.route.snapshot.paramMap.get('userID')||'';
  if (userID) {
    this.usersService.getUser(userID).subscribe(user => {
      this.user = user;
      console.log('user:', user);
    });
  }
  this.usersService.getcvUser(userID).subscribe({
    next: (data) => {
      this.CvApply = data;
      this.cvCount = this.CvApply.length;

      this.usersService.updateJobCountCv(this.cvCount);

    },
    error: (err) => {
      this.errMessage = err;
    }
  })
}
applied_cv: any[] = [];
cvCount: number = 0
CvApply: any
cv: string='';
errMessage:string='';
onFileSelectedPutCompany(event:any) {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload =  () =>{
     this.cv= reader.result as string;

  };
  reader.onerror = function (error) {
  console.log('Error: ', error);
  };
  };
applyCV():void {
    this.taiCv = false;
    this.UpdateCv=true;
    this.showCv = false;
    this.hoSoDaTao = false
    const userID = localStorage.getItem('userID') || '';
    this.usersService.applyCV(userID,this.cv).subscribe(()=> {
        this.applied_cv.push(this.cv);
        console.log(`Applied CV successfully: ${this.cv}`);
        const num_elements = this.applied_cv.length; // sử dụng hàm len() để đếm số phần tử
        console.log(`Number of elements in applied_cv: ${num_elements}`);
        location.reload()
      },
      error => {
        console.log(`Error applying CV: ${error}`);
      }
    );


  }

}




